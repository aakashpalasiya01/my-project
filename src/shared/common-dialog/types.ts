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

export type CommonReactCrop = {
    updateImageFromCrop: Function, 
    handleClose: Function, 
    showModal: boolean, 
    Fullimage: string | null
}