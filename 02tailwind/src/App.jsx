import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  let obj = {
    name : 'chai',
    age : 23,
    address : 'delhi'
  }

  let arr = [1,2,3,4,5,6,7,8,9]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Hello I'm tailwind</h1>
      <Card username = "Chai aur code" />
      <Card username = "Monkey"/>
    </>
  )
}

export default App
