import { User, 
    lamarJackson, 
    joeBurrow, 
    joshJacobs, 
    davanteAdams, 
    nickChubb } from "./users"

export interface Chatroom {
    id: string
    name: string
    users: Array<User>
}

export const qbChat: Chatroom = {
    id: '1',
    name: 'Quarterback Chatroom',
    users: [lamarJackson, joeBurrow]
}

export const rbChat: Chatroom = {
    id: '2',
    name: 'Running Back Chatroom',
    users: [joshJacobs, nickChubb]
}

export const wrChat: Chatroom = {
    id: '3', 
    name: 'Wide Receiver Chat',
    users: [davanteAdams]
}

export const allChats: Array<Chatroom> = [qbChat, rbChat, wrChat]