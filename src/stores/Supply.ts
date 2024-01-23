//Import pinia 
import { defineStore } from "pinia"

//import DB functions
import { ReadDb, ReadDbSupply } from "../db/DbConnect"

//Import interface
import type { SupplyInterface } from "../db/DbInterfaces"

const supply = defineStore("supply", {
    state() {
        return{
            supplys: [] as Array<SupplyInterface>,
            mySupply: {} as SupplyInterface
        }
    },

    actions: {
        async ReadSupplys(){
            const response = await ReadDbSupply()
            this.supplys = response.serverResponse
        },
        async SearchMySupply(cups:number){
            let response = false
            const search = await this.supplys.find((element) => element.cups == cups)
            if (search !== undefined) {
                this.mySupply = search
                response = true
            }
            return response
        }
    }
})

export {
    supply
}