import * as actionTypes from  '../constants/userinfo'

export function log(data){
  return {
    type:actionTypes.USER_LOGIN,
    data
  }
}

export function change(data){
  return{
    type:actionTypes.USER_CHANGE,
    data
  }
}
