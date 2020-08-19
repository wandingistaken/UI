export interface NavigationRoute {
  routeKey: string;
  linkTo: string;
  linkComponent: () => JSX.Element;
}
