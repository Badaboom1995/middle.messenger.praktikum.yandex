import Block from '../../framework/Block'
import template from './link.hbs'
import Router from '../Router'

const router = new Router()

type TEventFunc = (e: any) => void
type LinkProps = {
    href: string,
    label: string
    class?: string
    events?:  Record<string, TEventFunc>
}
export class Link extends Block {
    constructor(props: LinkProps) {
        super({
            props: {
                ...props,
                events: {
                    ...props.events,
                    click: (e) => {
                        e.preventDefault()
                        props.events?.click(e)
                        router.go(props.href)
                    },
                }
            }
        })
    }
    render() {
        return template
    }
}