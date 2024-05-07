'use client';
import { toast } from 'react-toastify';
import { BehaviorSubject } from "rx";

// for global loader service
export const isLoading = new BehaviorSubject<boolean>(false);

export const isDialogOpen = new BehaviorSubject<any>({
  open: false,
  data: { message: "Are you Sure?", title: "" },
  cancelText: "Cancel",
  confirmText: "Okay",
  onConfirm: () => { },
});

export const forSuccess = (message: string, id?: string) => 
  toast.success(message, { autoClose: 3000, toastId: id ? id : 1 })

export const forError = (message: string, id?: string) => 
  toast.error(message, { autoClose: 3000, toastId: id ? id : 1 })

export const forWarning = (message: string, id?: string) => 
  toast.warning(message, { autoClose: 3000, toastId: id ? id : 1 })
