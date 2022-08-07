import React from 'react'
import Article from './Article'
import FnHeader from './FnHeader'
import Footer from './Footer'
import Header from './Header'

function Index() {
  return (
    <React.Fragment>
        <Header/>
        <FnHeader/>
        <Article/>
        <Footer/>
    </React.Fragment>
  )
}

export default Index