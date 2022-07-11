import isEqual from '../utils/isEqual'
import { render } from '../framework/Render'

class RouteTypes {
    protected _pathname: string
    protected _blockClass: any
    protected _block: any
    protected _props?: Record<string, any>
}

export default class Route extends RouteTypes{
    constructor(pathname, view, props?) {
        super()
        this._pathname = pathname;
        this._blockClass = view;
        this._block = view;
        this._props = props || null;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    match(pathname) {
        return pathname === this._pathname
    }

    render() {
        render('#root', this._block)
    }
}