import myRoutes from "./config-routes.js";

export default function setNewRoute() {
  myRoutes.instance.currentRoute = myRoutes.getRouteByPath("/cars")
}