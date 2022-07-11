import { EventBus } from "./EventBus"
import { IBlock, constructorProps } from './types'
import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars'
import isEmpty from "../utils/isEmpty";

//TODO Сделать приватные методы и свойства
class Block implements IBlock {

    eventBus; props; _template; _element; _meta; __id; children; grow; inited
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

    constructor({ tagName = 'div', props: propsAndChildren, grow = false }: constructorProps) {
        const { children, props } = this._splitPropsAndChildren(propsAndChildren);
        this.grow = grow
        this.__id = makeUUID()
        this.inited = false
        this._meta = { tagName }
        this.children = this._makePropsProxy(children);
        this.props = this._makePropsProxy(props)

        this.eventBus = new EventBus(this)
        this._registerEvents(this.eventBus)

        this.eventBus.emit(Block.EVENTS.INIT)
    }

    _splitPropsAndChildren(propsAndChildren) {
        const children: any = {};
        const props = {};
        Object.entries(propsAndChildren).forEach(([key, value]: [string, any]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }
    // Upgrade. DRY
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
        if (this.grow) {
            this._element.classList.add('grow')
        }

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
        const propsProxy = new Proxy(props, {
            set: (target, prop, value) => {
                target[prop] = value;
                this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
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
        const customTarget = this._element.querySelector('[data-events]')
        const customEvents = customTarget?.dataset.events.split(',')
        Object.keys(events).forEach(eventName => {
            const callback = events[eventName]
            if (customEvents?.includes(eventName)) {
                customTarget.addEventListener(eventName, callback)
            } else {
                this._element.addEventListener(eventName, callback);
            }
        });
    }
    _removeEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            const callback = events[eventName]
            this._element.removeEventListener(eventName, callback);
        });
    }
    _render() {
        const blockId = this._element.dataset.id
        const block = this._compile(this.render())
        block.setAttribute('data-id', blockId)
        this._removeEvents()
        this._element.innerHTML = ''
        if (typeof block !== 'string') {
            if(this.inited){
                this._element.appendChild(block)
            }
            this._element = block
        }
        this._addEvents();
    }
    render() { }
    resetProps(name, value) {
        this.props[name] = value
    }
    makePartial() {
        Handlebars.registerPartial(this.constructor.name, (context) => this._template(context))
    }

    getElement() {
        return this._element
    }

    setProps = (nextProps: Record<string, unknown>) => {
        const { props, children } = this._splitPropsAndChildren(nextProps)
        if (!isEmpty(props)) {
            Object.assign(this.props, props);
        }
        if (!isEmpty(props)) {
            Object.assign(this.children, children);
        }
    };

    _compile(template) {
        const propsAndStubs = { ...this.props, ...this.children };
        Object.entries(this.children).forEach(([key, child]: any) => {
            propsAndStubs[key] = `<div data-id="${child.__id}"></div>`
        });
        const fragment: any = this._createDocumentElement('div');
        fragment.innerHTML = template(propsAndStubs)

        Object.values(this.children).forEach((child: any) => {
            const stub = fragment.querySelector(`[data-id="${child.__id}"]`);

            stub?.replaceWith(child.getElement());
        });

        if (fragment.children.length > 1) {
            throw new Error(`
            Template must return only one node but return this shit:

            ${fragment.outerHTML}
            
            `)
        }

        return fragment.children[0];
    }
    init() {
        this.inited = true
        this.eventBus.emit(Block.EVENTS.FLOW_CWM)
        this._createWrapper()
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
        this.eventBus.emit(Block.EVENTS.FLOW_CDM)

    }
}

export default Block