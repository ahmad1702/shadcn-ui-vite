import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { Button } from './components/ui/button'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4 bg-background text-foreground'>
      <div className='flex gap-2'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-32" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-32 animate-[spin_5s_linear_infinite]" alt="React logo" />
        </a>
      </div>
      <h1 className='text-4xl font-semibold'>Vite + React</h1>
      <Button className='' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
