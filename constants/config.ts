export enum AppRoute {
  Main = '/',
  Login = '/login',
  Register = '/register',
  Calendar = '/calendar',
  Profile = '/profile',
}

export enum ApiRoute {
  Register = '/api/register',
  Login = '/api/login',
}

export enum AuthorizationStatus {
  Auth = 'authenticated',
  NoAuth = 'unauthenticated',
  Loading = 'loading',
}
