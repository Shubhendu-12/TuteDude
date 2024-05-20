import React from 'react'
import CertificatesInternships from './components/CertificatesInternships'
import HiringCompanies from './components/HiringCompanies'
import Curriculum from './components/Curriculum'
import RefundOffer from './components/RefundOffer'
import Header from './components/Header'

const App = () => {
  return (
    <>
     <div className="app">
      <Header />
      <main>
        <Curriculum />
        <RefundOffer/>
        <HiringCompanies />
        <CertificatesInternships />
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div> 
    </>
  )
}

export default App
