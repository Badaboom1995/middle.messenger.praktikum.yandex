import { makeRequest } from '../utils/makeRequest'

const getChats = () => makeRequest("GET", '/chats')
const createChat = (name: string) => makeRequest("POST", '/chats', name)
const deleteChat = () => makeRequest("DELETE", '/chats')

export { getChats, createChat, deleteChat }