interface ToastInterface {
    msg: string, 
    type : TypeOptions,
    time: number
}

type TypeOptions = "alert-info" | "alert-success" | "alert-error"


export type { 
    ToastInterface,
    TypeOptions
}