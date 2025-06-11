import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BlockLayout from './components/BlockLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex gap-4'>
      <BlockLayout/>
    </div>
    </>
  )
}

export default App
