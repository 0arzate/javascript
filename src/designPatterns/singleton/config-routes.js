const routes = [
  {
    path: "/user",
    urlParamas: "/user/:id",
    paramsMapping: {
      user: "user.name",
      password: "user.password",
    }
  },
  {
    path: "/cars",
    urlParamas: "/user/:carid",
    paramsMapping: {
      carName: "car.name",
      key: "key.number",
    }
  }
]

export class Routes {
  constructor(routes) {
    console.log(Routes.instance)
    if(typeof Routes.prototype === "Object") {
      return Routes.prototype
    }

    this.instance = this
    const routesByPath = this.generateRoutesByPath(routes);
    this.routes = routesByPath;
    this.currentRoute = null;
  }

  getRouteByPath(path) {
    return this.routes[path];
  }

  generateRoutesByPath(routes) {
    const newRoutes = {};

    routes.forEach((route) => {
      newRoutes[route.path] = route
    })

    return newRoutes;
  }

  setCurrentRouteByPath(path) {
    this.currentRoute = this.getRouteByPath(path);
  }
}

const myRoutes = new Routes(routes);

export default myRoutes
