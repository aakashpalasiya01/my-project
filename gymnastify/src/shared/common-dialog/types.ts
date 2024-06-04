type Data = {
    title?: string,
    message: string
}
export type CommonDialog = {
    open?: boolean,
    signupIsOpen?: boolean,
    loginIsOpen?:boolean,
    data: Data,
    cancelText: string,
    confirmText: string,
    onConfirm: Function
}