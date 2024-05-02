import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { Service } from "typedi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { OpenAPI } from "routing-controllers-openapi";
import { ReportTokenBody, SendTokenBody, ValidateTokenBody } from "@base/api/schemas/Token/FlussoTokenSchema";

@Service()
@OpenAPI({
  tags: ["Token"],
})
@JsonController("/token")
export class LoginController extends ControllerBase {
  public constructor() {
    super();
  }

  @Get("/pending")
  public async getPendingTokens() {

  }

  @Post("/report")
  public async reportToken(@Body() reportBody: ReportTokenBody ) {

  }

  @Post("/validate")
  public async validateToken(@Body() validateBody: ValidateTokenBody ) {

  }

  @Post("/send")
  public async sendToken(@Body() sendTokenBOdy: SendTokenBody ) {

  }

}
