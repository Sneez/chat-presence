# Presence App

This is a demo app written in Vue 3 that shows the user a homepage with a list of chatrooms they can create/join.  When hovering on a chatroom's name, the chatroom's 'presence' is shown, which is a popover that shows the profile images/names of some of the members in the chat. Users can switch between 12 dummy users in the form of NFL football players (the season is starting soon!) for the sake of emulating different users quickly.

![Alt text](./src/assets/presence.png)

## Installation Instructions

```
git clone https://github.com/Sneez/chat-presence.git
cd chat-presence
npm install
npm run dev
```

## Technologies Used

This project is a Vue 3 application that runs on Vite, a build tool that provides a fast development experience for modern web projects.  It leverages Typescript and Pinia for state management. The popovers use a library called Vue 3 Popper, which utilises the latest version of PopperJS to place popovers in the correct spot. The testing framework used is a unit test framework called Vitest, which piggy-backs off of Vite for very fast testing.

## How it works

The challenge of this project was to implement a service in the form of a directive that can dynamically inject the presence popover into the DOM based on the chatroom's list of associated users. The way this is achieved is that on mount, elements with the v-presence attribute dynamically inject the associated popover component into the DOM as the element's first child.  The chat data passed into the directive's attribute value gets passed as a prop into the popover component that is then initialized and added to the DOM.

## Testing Instructions
To run unit tests, run:
```
npx vitest
```
