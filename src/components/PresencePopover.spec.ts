import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { Pinia, createPinia, setActivePinia } from 'pinia'
import { useUsers } from '../stores/users'
import { useChatrooms } from '../stores/chatrooms'
import PresencePopover from './PresencePopover.vue'

describe("PresencePopover", () => {
    let pinia: Pinia

    beforeEach(() => {
        pinia = createPinia()
        setActivePinia(pinia)
        const usersStore = useUsers()
        // emulate Josh Jacobs
        usersStore.setCurrentUser('3')
    })

    it("shows some users", async () => {

        const chatroomStore = useChatrooms()

        const wrapper = mount(PresencePopover, {
            global: {
                plugins: [pinia]
            },
            props: {
                chatroom: chatroomStore.chatrooms[0]
            }
        })

        expect(wrapper.findAll('.user-info')).toHaveLength(chatroomStore.chatrooms[0].maxPresence)
        expect(wrapper.find('[data-id="leftOutNames"]').exists()).toBe(true)

        // number of users in chat minus the max users shown (5 - 3 = '+2 more')
        const leftOver = chatroomStore.chatrooms[0].users.length - chatroomStore.chatrooms[0].maxPresence

        expect(wrapper.find('[data-id="leftOutNames"]').text()).toBe('+' + leftOver + ' more')
        expect(wrapper.find('[data-id="leftOutNames"]').attributes('title')).toBe('Jalen Hurts, Patrick Mahomes')
    })

})