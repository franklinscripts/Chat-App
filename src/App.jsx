import Chats from './components/Chats'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className="app-body">
      <Sidebar />
      <Chats />
     </div>
    </div>
  )
}

export default App


// mongodb+srv://web3guy:<password>@cluster0.t0wv0m1.mongodb.net/?retryWrites=true&w=majority