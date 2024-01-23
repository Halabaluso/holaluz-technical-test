import type { DbResponseSupplys, DbResponseUsers, UserInterface, SupplyInterface} from "./DbInterfaces"
import data from './clients.json'
import supply from "./supply-points.json"


const ReadDb = async () => {
    try {
        const jsonDb = data as unknown as Array<UserInterface>
        let response:DbResponseUsers = {
            err: false, 
            serverMsg: "Database read",
            serverResponse: []
        }
        response.serverResponse = jsonDb
        return response
    } catch (error: any) {
        let response:DbResponseUsers = {
            err: true, 
            serverMsg: "Something went wrong",
            serverResponse: [],
            errorResponse: error.code
        }
        return response
    }
}

const ReadDbSupply = async () => {
    try {
        const jsonDb = supply as unknown as Array<SupplyInterface>
        let response:DbResponseSupplys = {
            err: false, 
            serverMsg: "Database read",
            serverResponse: []
        }
        response.serverResponse = jsonDb
        return response
    } catch (error: any) {
        let response:DbResponseSupplys = {
            err: true, 
            serverMsg: "Something went wrong",
            serverResponse: [],
            errorResponse: error.code
        }
        return response
    }
}

export{
    ReadDb,
    ReadDbSupply
}