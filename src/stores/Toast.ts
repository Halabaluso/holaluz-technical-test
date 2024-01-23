//Import pinia
import { defineStore } from "pinia"

//Import interfaces
import type { ToastInterface, TypeOptions } from "../stores/StoreInterfaces"

const toast = defineStore("toast", {
    state() {
        return{
            msg: "" as String, 
            type: "alert-info" as TypeOptions,
            show: false as Boolean, 
            time: 0 as number
        }
    },
    actions:{
        ShowToast(msg: String, type:TypeOptions , time: number){
            this.msg = msg
            this.type = type
            this.show = true
            this.time = time
            setTimeout(() => {
                this.show = false
            }, this.time)
        }
    }
})

export {
    toast
}