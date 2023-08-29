import { createApp } from "vue";
import PresencePopover from "../components/PresencePopover.vue";

export const vPresence = {
    mounted: (el: HTMLElement, binding: any) => {
        const div = document.createElement('div');
        el.appendChild(div);
        createApp(PresencePopover, {chatroom: binding.value}).mount(div)
    }
}