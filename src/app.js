import React from 'react'
import Navbar from 'components/Navbar/navbar'
import Footer from 'components/Footer/footer'
const App = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default App
