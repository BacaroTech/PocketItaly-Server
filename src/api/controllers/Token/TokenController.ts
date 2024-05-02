import { Body, Get, JsonController, Middleware, NotFoundError, Param, Post, QueryParam, Req, UseBefore } from "routing-controllers";
import { Inject, Service } from "typedi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { OpenAPI } from "routing-controllers-openapi";
import { ReportTokenBody, SendTokenBody, ValidateTokenBody } from "@base/api/schemas/Token/FlussoTokenSchema";
import { TokenService } from "@base/api/services/Token/TokenService";
import { AuthCheck } from "@base/infrastructure/middlewares/Auth/AuthCheck";
import { User } from "@base/api/models/Users/User";
import { AuthRequest } from "@base/infrastructure/interfaces/controller.interfaces";
import { TokenTransactionService } from "@base/api/services/Token/TokenTransactionService";

@Service()
@OpenAPI({
  tags: ["Token"],
})
@JsonController("/token")
export class LoginController extends ControllerBase {
  public constructor() {
    super();
  }

  @Inject()
  private tokenService:TokenService

  @Inject()
  private tokenTransactionService:TokenTransactionService

  @Get("/pending")
  @UseBefore(AuthCheck)
  public async getPendingTokens(@Req() request:AuthRequest ) {
    return this.tokenService.findPendingTokens(request.loggedUser)
  }

  @Post("/report")
  @UseBefore(AuthCheck)
  public async reportToken( @Req() request:AuthRequest & {body:ReportTokenBody} ) {
    
  }

  @Post("/validate")
  @UseBefore(AuthCheck)
  public async validateToken(@Req() request:AuthRequest & {body:ValidateTokenBody} ) {
    return await this.tokenService.validateToken(request.loggedUser,request.body)
  }

  @Post("/send")
  @UseBefore(AuthCheck)
  public async sendToken(@Req() request:AuthRequest & {body:SendTokenBody} ) {
    return await this.tokenTransactionService.createTokenTransaction(request.loggedUser,request.body)
  }

}
