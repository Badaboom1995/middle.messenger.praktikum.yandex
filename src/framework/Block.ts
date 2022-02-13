import { EventBus } from "./EventBus"
import { IBlock, constructorProps } from './types'
import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars'

//TODO Сделать приватные методы и свойства
class Block implements IBlock {

    eventBus; props; _template; _element; _meta; __id; children
    listeners = []

    static EVENTS = {
        INIT: "init",
        FLOW_CWM: "flow:component-will-mount",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CWU: "flow:component-will-update",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CWUM: "flow:component-will-unmount",
        FLOW_RENDER: "flow:render"
    };

    constructor({ tagName = 'div', props }: constructorProps) {
        const { children, onlyProps } = this._getChildren(props);
        this.children = children;
        this.__id = makeUUID()
        this._meta = { tagName }
        this.props = this._makePropsProxy(onlyProps)
        this.eventBus = new EventBus(this)
        this._registerEvents(this.eventBus)
        this.eventBus.emit(Block.EVENTS.INIT)
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CWM, this._componentWillMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CWUM, this._componentWillUnmount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createWrapper() {
        const { tagName } = this._meta
        this._element = document.createElement(tagName)
        this._element.setAttribute('data-id', this.__id)
    }
    _componentWillMount() {
        this.componentWillMount()
    }
    componentWillMount() { }

    _componentDidMount() {
        this.componentDidMount()

        Object.values(this.children).forEach((child: any) => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount() { }

    dispatchComponentDidMount() {
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentWillUpdate(oldProps, newProps) {
        this.componentWillUpdate(oldProps, newProps)
    }

    componentWillUpdate(oldProps, newProps) { }

    _componentDidUpdate(oldProps, newProps) {

    }

    componentDidUpdate(oldProps, newProps) {

    }

    _componentWillUnmount(props) {

    }

    componentWillUnmount(props) {

    }

    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }

    _makePropsProxy(props) {
        const self = this;
        const propsProxy = new Proxy(props, {
            set(target, prop, value) {
                target[prop] = value;
                self.eventBus.emit(Block.EVENTS.FLOW_RENDER)
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error('нет доступа')
            }
        })

        return propsProxy;
    }
    _addEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            const callback = events[eventName]
            this._element.addEventListener(eventName, callback);
        });
    }
    _removeEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            const callback = events[eventName]
            this._element.removeEventListener(eventName, callback);
        });
    }
    _getChildren(propsAndChildren) {
        const children: any = {};
        const onlyProps = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                onlyProps[key] = value;
            }
        });

        return { children, onlyProps };
    }
    _render() {
        const block = this.render();
        this._template = block
        this._removeEvents()
        this._element.innerHTML = '';
        if (typeof block !== 'string') {
            this._element.appendChild(block)
        }

        this._addEvents();
    }

    render() {
        return ''
    }
    makePartial() {
        Handlebars.registerPartial(this.constructor.name, (context) => this._template(context))
    }
    getElement() {
        return this._element
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    compile(template, props) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]: any) => {
            propsAndStubs[key] = `<div data-id="${child.__id}"></div>`

        });

        const fragment: any = this._createDocumentElement('div');
        fragment.innerHTML = template(propsAndStubs)

        Object.values(this.children).forEach((child: any) => {
            const stub = fragment.querySelector(`[data-id="${child.__id}"]`);
            stub?.replaceWith(child.getElement());
        });

        return fragment;
    }
    init() {
        this.eventBus.emit(Block.EVENTS.FLOW_CWM)
        this._createWrapper()
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
        this.eventBus.emit(Block.EVENTS.FLOW_CDM)

    }
}

export default Block