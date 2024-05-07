import { BehaviorSubject } from 'rx'
import { toast } from "react-toastify";



export const count = (totalCount, limit) => {
  let total = totalCount / limit
  let totalPage = []
  for(let i=0; total > i; i++){
      totalPage.push(i+1)
  }
  return totalPage.length
}
// for global loader service
export const isLoading = new BehaviorSubject(false)

export const isDialogOpen = new BehaviorSubject(false)

export const forSuccess = (message, title) => toast.success(message, title);

export const forError = (message, title) => toast.error(message, title)

export const forWarning = (message, title) => toast.warning(message, title)

export const forinfo = (message, title) =>toast.info(message, title)