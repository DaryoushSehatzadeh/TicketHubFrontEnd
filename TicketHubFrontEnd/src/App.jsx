import { useState } from 'react'

import './App.css'
import Banner from './Banner.jsx';
import ConcertDetails from './ConcertDetails.jsx'
import Form from './Form.jsx';



function App() {

  return (<>
    <Banner />
    <div className="container">
      <div className="d-flex justify-content-center gap-4"> 
        <div className="col-md-3">
          <ConcertDetails />
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    </div>
  </>
  )
}

export default App
