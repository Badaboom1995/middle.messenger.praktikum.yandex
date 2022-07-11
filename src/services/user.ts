import { makeRequest } from '../utils/makeRequest'

const getUser = () => makeRequest('GET', '/auth/user')
const auth = (data) => makeRequest('POST', '/auth/signup', data)
const reg = (data) => makeRequest('POST', '/auth/signin', data)

export { getUser, auth, reg }