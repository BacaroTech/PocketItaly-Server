import {  Body, Get, JsonController,  Param,  Post, Req, UseBefore } from "routing-controllers";
import { Inject, Service } from "typedi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { OpenAPI } from "routing-controllers-openapi";
import { GenerateTokenBody, ReportTokenBody, SendTokenBody, ValidateTokenBody } from "@base/api/schemas/Token/FlussoTokenSchema";
import { TokenService } from "@base/api/services/Token/TokenService";
import { AuthCheck } from "@base/infrastructure/middlewares/Auth/AuthCheck";
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

  
  @Post("/generate")
  @UseBefore(AuthCheck)
  public async generateToken(@Req() request:AuthRequest, @Body() body:GenerateTokenBody ) {
    const {loggedUser} = request
    const {companyId,productId,serialCode} = body
    return await this.tokenService.generateToken(loggedUser,companyId,productId,serialCode)
  }

  @Get("/:tokenId/transactions")
  @UseBefore(AuthCheck)
  public async getTokenTransactions(@Req() request:AuthRequest , @Param("tokenId") tokenId:string ) {
    return await this.tokenTransactionService.findTokenTransactionsByTokenId(parseInt(tokenId))
  }

  @Get("/pending")
  @UseBefore(AuthCheck)
  public async getPendingTokens(@Req() request:AuthRequest ) {
    return await this.tokenService.findPendingTokens(request.loggedUser)
  }

  @Post("/report")
  @UseBefore(AuthCheck)
  public async reportToken( @Req() request:AuthRequest ,@Body() body:ReportTokenBody) {
    return "Report acquired"
  }

  @Post("/validate")
  @UseBefore(AuthCheck)
  public async validateToken(@Req() request:AuthRequest ,@Body() body:ValidateTokenBody ) {
    return await this.tokenService.validateToken(request.loggedUser,body)
  }

  @Post("/send")
  @UseBefore(AuthCheck)
  public async sendToken(@Req() request:AuthRequest ,@Body() body:SendTokenBody ) {
    return await this.tokenTransactionService.createTokenTransaction(request.loggedUser,body)
  }

}
