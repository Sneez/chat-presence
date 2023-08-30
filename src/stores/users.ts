import { defineStore } from "pinia";
import { User, allUsers } from "../models/users"

interface UsersState {
    currentUserId: string
}

export const useUsers = defineStore("users", {
    state: (): UsersState => ({
        currentUserId: '1'
    }),
    
    actions: {
        setCurrentUser (id: string) {
            this.currentUserId = id
        }
    },
    getters: {
        currentUser(): User {
            const currentUser = allUsers.find(user => user.id === this.currentUserId)
            if(currentUser){
                return currentUser
            }
            else {
                return allUsers[0]
            }
            
        }
    }

})