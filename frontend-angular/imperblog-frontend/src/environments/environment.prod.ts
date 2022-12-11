export const environment = {
  production: false,
    baseUrl: 'http://localhost:8080',
    tokenAllowedDomains: ["localhost:8080"],
    disallowedRoutes: [/\/oauth\/token/, /\/api\/auth\/signup/]
};
