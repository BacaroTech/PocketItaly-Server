import {
  Get,
  JsonController,
  Req,
  UseBefore,
} from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { ControllerBase } from '@base/infrastructure/abstracts/ControllerBase';
import { OpenAPI } from 'routing-controllers-openapi';
import { AuthCheck } from '@base/infrastructure/middlewares/Auth/AuthCheck';
import { AuthRequest } from '@base/infrastructure/interfaces/controller.interfaces';
import { UserService } from '@base/api/services/User/UserService';



@Service()
@OpenAPI({
  tags: ['User'],
})
@JsonController('/user')
export class UserController extends ControllerBase {
  
  public constructor() {
    super();
  }

  @Inject()
  private userService :UserService

  @Get("/wardrobe")
  @UseBefore(AuthCheck)
  public async getUserWardrobe(@Req() request:AuthRequest){
    return await this.userService.getUserWardrobe(request.loggedUser.userId)
  }

}