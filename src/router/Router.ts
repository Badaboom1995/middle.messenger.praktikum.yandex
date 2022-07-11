import Route from './Route'

class RouterTypes {
    protected static __instance: Router
    protected routes: Route[]
    public privateAllowed: boolean
    protected notFound: Route
    protected public: Route[]
    protected history: typeof window.history
    protected _currentRoute?: string
}

export default class Router extends RouterTypes {
    constructor() {
        super()
        if(Router.__instance){
            return Router.__instance
        }
        this.routes = [];
        this.public = [];
        this.history = window.history;
        this._currentRoute = null;

        Router.__instance = this
    }

    use(pathname, block) {
        // Вместо трёх точек напишем отдельную сущность — об этом речь пойдёт ниже
        const route = new Route(pathname, block);
        this.routes.push(route);
        return this;
    }

    setNotFound(block){
        this.notFound = new Route('404', block)
        return this
    }
    setPublic(path, block){
        this.public.push(new Route(path, block))
        return this
    }
    allowPrivate(){
        this.privateAllowed = true
        return this
    }
    blockPrivate(){
        this.privateAllowed = false
        return this
    }

    start() {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = event => {
            this._onRoute(event.currentTarget.location.pathname);
        };
        this._onRoute(window.location.pathname);
        return this
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            this.notFound.render()
            return
        }
        route.render();
    }

    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    getRoute(pathname){
        const routes = this.privateAllowed ? this.routes : this.public
        return routes.find(route => route.match(pathname));
    }

}