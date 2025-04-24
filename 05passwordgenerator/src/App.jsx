import { useState, useCallback, useEffect, useRef, use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generate = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numallow) str += '0123456789'
    if(charallow) str += '!@#$%^&*'

    for (let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)



  }, [length, numallow, charallow, setPassword])


  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 12);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    generate()
  }
  , [length, numallow, charallow, generate])
  return (
    <>
      

      <div className='w-full h-100 max-w-md mx-auto shadow-lg rounded-xl
       px-4 my-60 py-3 bg-gray-800 text-orange-500'>

        <h1 className='text-4xl text-center my-8'>Password Generator</h1>

        <div className='flex shadow
        rounded-lg overflow-hidden mb-4 justify-center align-center'>
          <input type="text" 
          value={password}
          className='outline-none w-full px-3 py-3 my-8 bg-white rounded'
          placeholder='Your Password'
          readOnly
          ref = {passwordRef}
          />


          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 my-8 shrink-1 rounded'
          
          onClick = {copyPassword}
          
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
            type="range" 
            min={4}
            max={44}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
             />
             <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numallow}
            id="numInput"
            onChange={(e) => {
              setNumallow((prev) => !prev)
            }}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numallow}
            id="charInput"
            onChange={(e) => {
              setCharallow((prev) => !prev)
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
       </div>
    </>
  )

}

export default App;
