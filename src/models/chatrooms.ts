import { User, 
    lamarJackson, 
    joeBurrow, 
    joshJacobs, 
    davanteAdams, 
    nickChubb,
    matthewStafford,
    jalenHurts, 
    patrickMahomes,
    saquonBarkley,
    cooperKupp,
    tyreekHill,
    justinJefferson} from "./users"

export interface Chatroom {
    id: string
    name: string
    users: Array<User>
    maxPresence: number
}

export const qbChat: Chatroom = {
    id: '1',
    name: 'Quarterback Chatroom',
    users: [lamarJackson, joeBurrow, matthewStafford, jalenHurts, patrickMahomes],
    maxPresence: 3
}

export const rbChat: Chatroom = {
    id: '2',
    name: 'Running Back Chatroom',
    users: [joshJacobs, saquonBarkley, nickChubb],
    maxPresence: 2
}

export const wrChat: Chatroom = {
    id: '3', 
    name: 'Wide Receiver Chat',
    users: [davanteAdams, cooperKupp, tyreekHill, justinJefferson],
    maxPresence: 4
}

export const allChats: Array<Chatroom> = [qbChat, rbChat, wrChat]