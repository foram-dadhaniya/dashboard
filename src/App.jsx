import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store"; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes/>
      <ToastContainer />
    </>
  )
}

export default App