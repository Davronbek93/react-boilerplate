import React from 'react'
import './App.scss'

const App = ({title = 'V2T!'}) => {
  return (
    <div className="App">
      <h1 data-testid="title">{title}</h1>
    </div>
  )
}

export default App