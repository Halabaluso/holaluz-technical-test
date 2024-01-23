interface UserInterface {
    full_name: string,
    address: string,
    cups: number,
    role: "customer" | "customer-basic" | "customer-premium",
    building_type: "house" | "apartment"
}

interface PowerInterface {
    p1: string,
    p2: string
}

interface SupplyInterface {
    cups: number,
    tariff: "Two prices" | "Three prices" | "One price",
    invoiced_amount: string,
    power: PowerInterface,
    neighbors: Array<number>
}

interface DbResponseUsers {
    err: boolean,
    serverMsg: string, 
    serverResponse: Array<UserInterface>,
    errorResponse?: string
}

interface DbResponseSupplys {
    err: boolean,
    serverMsg: string, 
    serverResponse: Array<SupplyInterface>,
    errorResponse?: string
}

export type {
    DbResponseSupplys,
    DbResponseUsers,
    UserInterface,
    SupplyInterface
}