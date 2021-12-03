import './profile.scss'

import tmpl from './profile.hbs'
import context from './context'
import createModule from '../../utils/createModule'

export default createModule({ name: 'Profile', template: tmpl, props: context })
