import React from 'react'
import Navbar from 'components/Navbar/navbar'
import Footer from 'components/Footer/footer'
import { MessengerChat } from 'react-messenger-chat-plugin'
const App = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div>
        <MessengerChat
          pageId="108384368705186"
          bottomSpacing={300}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={'show'}
          debugMode={true}
          onMessengerShow={() => {
            console.log('onMessengerShow')
          }}
          onMessengerHide={() => {
            console.log('onMessengerHide')
          }}
          onMessengerDialogShow={() => {
            console.log('onMessengerDialogShow')
          }}
          onMessengerDialogHide={() => {
            console.log('onMessengerDialogHide')
          }}
          onMessengerMounted={() => {
            console.log('onMessengerMounted')
          }}
          onMessengerLoad={() => {
            console.log('onMessengerLoad')
          }}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
