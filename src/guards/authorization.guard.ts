import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'src/User/User.service';
import { PERMISSIONS_KEY } from 'src/decorators/permissions.decorator';

export interface Permission {
  resource: string;
  actions: string[];
}

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Vérifie que l'utilisateur est authentifié (ajouté par AuthenticationGuard)
    if (!request.userId) {
      throw new UnauthorizedException('User Id not found');
    }

    // Récupère les permissions nécessaires pour accéder à la route
    const routePermissions: Permission[] = this.reflector.getAllAndOverride(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    console.log('Route Permissions:', routePermissions);

    if (!routePermissions || routePermissions.length === 0) {
      return true; // Si aucune permission n'est requise, accès autorisé
    }

    try {
      // Récupère les permissions de l'utilisateur depuis le service
      const userPermissions: Permission[] = await this.authService.getUserPermissions(
        request.userId,
      );

      console.log('User Permissions:', userPermissions);

      // Vérifie chaque permission requise pour la route
      for (const routePermission of routePermissions) {
        const userPermission = userPermissions.find(
          (perm) => perm.resource === routePermission.resource,
        );

        if (!userPermission) {
          throw new ForbiddenException(
            `Access denied to resource: ${routePermission.resource}`,
          );
        }

        const hasAllActions = routePermission.actions.every((requiredAction) =>
          userPermission.actions.includes(requiredAction),
        );

        if (!hasAllActions) {
          throw new ForbiddenException(
            `Insufficient actions for resource: ${routePermission.resource}`,
          );
        }
      }

      return true; // Toutes les conditions sont satisfaites
    } catch (e) {
      throw new ForbiddenException(`Access denied: ${e.message}`);
    }
  
  }}
