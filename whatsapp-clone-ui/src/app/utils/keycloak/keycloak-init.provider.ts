import { APP_INITIALIZER, Provider, inject } from '@angular/core';
import { KeycloakService } from './keycloak.service';


export function initializeKeycloak() {
  const keycloak = inject(KeycloakService);
  return () => keycloak.init();
}


export const keycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true
};
