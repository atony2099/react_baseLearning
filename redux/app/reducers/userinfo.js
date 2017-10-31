import * as actionTypes from '../constants/userinfo'

const initialState = {user:''}
export default function userinfo(state = initialState,action){
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return action.data
      case actionTypes.USER_CHANGE:
        return action.data
    default:
    return state
  }
}
