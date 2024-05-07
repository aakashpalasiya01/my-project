import * as API from './ApiRoutes'
import * as ROUTER_PATH from './RouterPath'
import { FRONT_END_URL } from 'config.js'

export const API_ROUTES = {
  ...API.AUTH_API,
  ...API.USERS_API,
}

export const ROUTES = {
  ...ROUTER_PATH.PUBLIC_ROUTES,
  ...ROUTER_PATH.PRIVATE_ROUTES
}

export const listLimit = 10

export const FRONT_URL = FRONT_END_URL()

export const brandLogo = "https://bitops.bitcotapps.com/assets/images/thumbnails/logo.svg"
export const SearchFilter = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      func.apply(context, args)
    }, 500);
  }
}


export const sortAlphabaticOrder =(sort)=>{
 return sort.sort((a, b) => {
    const nameA = a.label.toUpperCase(); // ignore upper and lowercase
    const nameB = b.label.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}
