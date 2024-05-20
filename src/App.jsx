import React from 'react'
import CertificatesInternships from './components/CertificatesInternships'
import HiringCompanies from './components/HiringCompanies'
import Curriculum from './components/Curriculum'
import RefundOffer from './components/RefundOffer'
import Header from './components/Header'
import DataScienceBundle from './components/DataScienceBundle'
import KeyHighlights from './components/KeyHighlights'

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
        <DataScienceBundle/>
      </main>
      <footer>
        <KeyHighlights/>
      </footer>
    </div> 
    </>
  )
}

export default App
