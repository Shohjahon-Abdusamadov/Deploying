import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='
        max-w-[208px]
        text-center
        m-auto
        flex
        items-center
        justify-center
        flex-col
        p-5
        shadow-2xl
    '>
      <div className='
        icon
        bg-slate-500
        w-14
        h-14
        text-center
        rounded-full
        '></div>
      <h1 className='
        font-bold
        mt-5
        mb-4
      '>Headline</h1>
      <p className='
        text-justify
      '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, deleniti sed qui eius.</p>
    </div>
  )
}

export default App
