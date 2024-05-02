import { Get, JsonController } from "routing-controllers";
import { Service } from "typedi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { OpenAPI } from "routing-controllers-openapi";

@Service()
@OpenAPI({
  tags: ["Xtoken"],
})
@JsonController("/xtoken-transaction")
export class LoginController extends ControllerBase {
  public constructor() {
    super();
  }

  @Get()
  public async getTest() {
    return "hello";
  }
}
