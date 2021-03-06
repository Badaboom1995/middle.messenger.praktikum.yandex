// TODO any
type propsValue = string | number | null | undefined | Record<string, any>

export type propsType = Record<string, propsValue>
// TODO any, TODO grow: это костыль, нужно сделать корректное создание обертки
export type constructorProps = { tagName?: string, props: Record<string, any>, grow?: boolean }
export interface IBlock {
    _element: HTMLElement
    _meta: {
        props: propsType,
        tagName: string,
        events: Record<string, (e) => void>,
    }
    __id: string,
    _createWrapper(): void
    _componentDidMount(): void
    _componentDidUpdate(oldProps: propsType, newProps: propsType): void
    _componentWillUpdate(oldProps: propsType, newProps: propsType): void
    _componentWillUnmount(props: propsType): void
    _createDocumentElement(tagName: string): void
    _makePropsProxy(props: propsType): void
    _registerEvents(EventBus): void
    _render(): void
    init(): void
    makePartial(name: string, template: any): void
    // TODO any
    render(): any
    props: propsType
    eventBus
    // TODO костыль
    grow?: boolean
}

// TODO any to generic or smth
type listenerType = (p: any) => void
export type listenersType = Record<string, listenerType>
export interface IEventBus {
    listeners: listenersType
    currentObject?: Record<string, any>
}