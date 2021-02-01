import {SET_USER, DELETE_USER} from '../constant'

export const set_user = data => ({type: SET_USER, data})
export const delete_user = () => ({type: DELETE_USER})