import setNewRoute from "./generate-routes.js";
import myRoutes, { Routes } from "./config-routes.js";

setNewRoute()

//console.log(myRoutes.instance.currentRoute)

myRoutes.instance.setCurrentRouteByPath("/user")

//console.log(myRoutes.instance.currentRoute)

const otherRoutes = new Routes([])

otherRoutes.setCurrentRouteByPath("/cars")

console.log(myRoutes.instance)
console.log(otherRoutes.instance)