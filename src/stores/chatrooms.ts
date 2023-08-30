import { defineStore } from "pinia";
import { Chatroom, allChats } from "../models/chatrooms";
import { useUsers } from "./users";
import { User } from "../models/users";

interface ChatroomsState {
    chatrooms: Array<Chatroom>
}

export const useChatrooms = defineStore("chatrooms", {
    state: (): ChatroomsState => ({
        chatrooms: allChats
    }),
    
    actions: {
        addChatroom (name: string) {
            this.chatrooms.push({
                id: (this.chatrooms.length + 1).toString(),
                name: name,
                users: [],
                maxPresence: 3
            })
        },
        joinChatroom (name: string) {
            const namedChatroom = this.chatrooms.find(chat => chat.name === name)
            if(namedChatroom){
                const usersStore = useUsers()
                namedChatroom.users.push(usersStore.currentUser)
            }
        },
        unsubscribe (name: string) {
            const namedChatroom = this.chatrooms.find(chat => chat.name === name)
            if(namedChatroom){
                const usersStore = useUsers()
                const currentUserInChat = (user: User) => user.id === usersStore.currentUserId
                let userIndex = namedChatroom.users.findIndex(currentUserInChat)
                if(userIndex > -1) {
                    namedChatroom.users.splice(userIndex, 1)
                }
            }
        }
    }

})