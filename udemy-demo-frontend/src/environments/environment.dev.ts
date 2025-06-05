import { environment as baseEnv } from './environment';

export const environment = {
  ...baseEnv,
  baseUrl: 'http://localhost:8080/api/v1',
  production: false,
  debugMode: true
};