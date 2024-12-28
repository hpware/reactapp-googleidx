import { useState } from 'react'
import mainicon from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
      <a href="/" target="_blank">
          <img src={mainicon} class="logo" alt="logo" />
        </a>
      </div>
      <h1>add page</h1>
      <h2>2024</h2>
      <a class="text-white" href="/2024">
        <button class="button-normal">
         event
        </button>
      </a>
      <h2>以前的活動</h2>
      <a href="progress">
        <button class="button-normal">
          回憶錄
        </button>
      </a>

    </>
  )
}

export default App
