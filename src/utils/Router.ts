interface IRouter {
    __instance: Router | null,
    routes: string[]
    history
}
class Router implements IRouter {
    __instance = null;
    routes = []
    history;
    _currentRoute;
    constructor() {
        if (this.__instance) {
            return this.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;

        Router.__instance = this;
    }
}

export default Router;