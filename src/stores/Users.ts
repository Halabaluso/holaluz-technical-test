//Import pinia 
import { defineStore } from "pinia"

//import DB functions
import { ReadDb } from "../db/DbConnect"

//Import interface
import type { UserInterface } from "../db/DbInterfaces"



const users = defineStore("users", {
    state() {
        return{
            users: [] as Array<UserInterface>,
            findUser: {} as UserInterface
        }
    },
    actions: {
        async ReadUsers(){
            const response = await ReadDb()
            this.users = response.serverResponse
        }
    }
})

export {
    users
}