import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import Navbar from './Navbar.vue'
import { Pinia, createPinia, setActivePinia } from 'pinia'
import { useUsers } from '../stores/users'
import ChatroomList from './ChatroomList.vue'

describe("ChatroomList", () => {
    let pinia: Pinia

    beforeEach(() => {
        pinia = createPinia()
        setActivePinia(pinia)
        const usersStore = useUsers()
        // emulate Josh Jacobs
        usersStore.setCurrentUser('3')
    })

    it("adds a new chat", async () => {

        const navWrapper = mount(Navbar, {
            global: {
                plugins: [pinia]
            }
        })
        const chatWrapper = mount(ChatroomList, {
            global: {
                plugins: [pinia]
            }
        })

        let originalChatLength = chatWrapper.findAll('.chatroom-elem').length

        await navWrapper.find('input').setValue('New Chat')
        await navWrapper.find('#submit-button').trigger('click')
        
        expect(chatWrapper.findAll('.chatroom-elem')).toHaveLength(originalChatLength + 1)

        // check the text on the last element, which is the original length +1 -1(since arrays are index 0)
        const lastElem = chatWrapper.findAll('.chatroom-elem')[originalChatLength]
        expect(lastElem.find('.chat-name').text()).toBe('New Chat')

    })

    it("joins a chatroom", async () => {

        const chatWrapper = mount(ChatroomList, {
            global: {
                plugins: [pinia]
            }
        })

        // Join quarterback chat, then leave the chat
        expect(chatWrapper.find('[data-id="data-1"]').find('button').text()).toBe('Join')
        await chatWrapper.find('[data-id="data-1"]').find('button').trigger('click')
        expect(chatWrapper.find('[data-id="data-1"]').find('button').text()).toBe('Leave')
        await chatWrapper.find('[data-id="data-1"]').find('button').trigger('click')
        expect(chatWrapper.find('[data-id="data-1"]').find('button').text()).toBe('Join')

    })

})