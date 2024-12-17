import { Body, Controller, Post ,Get} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dtos/role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async createRole(@Body() role: CreateRoleDto) {
    return this.rolesService.createRole(role);
  }
  @Get()
  async getRoles() {
    return this.rolesService.getRoles();
  }
}
