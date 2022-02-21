import { listenersType, IEventBus } from './types'

export class EventBus implements IEventBus {

    currentObject = null
    listeners = {}

    constructor(currentObject: Record<string, any>) {
        this.currentObject = currentObject

    }

    // _proxifyListeners(listeners: listenersType) {
    //     return new Proxy(listeners, {
    //         set(target, prop, value) {
    //             if (typeof prop === 'symbol') {
    //                 throw new Error('symbol is not allowed here')
    //             }
    //             const proxyArray = new Proxy(value, {
    //                 set(target, prop, value) {
    //                     console.log(target, prop, value)
    //                     target[prop] = value
    //                     return true
    //                 }
    //             })
    //             target[prop] = proxyArray
    //             return true
    //         },
    //     })
    // }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(function (listener) {
            listener(...args);
        });
    }
}