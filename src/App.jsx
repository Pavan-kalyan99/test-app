import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Index from './components/Custom/Index';
import SampleForm from './components/FormExample/FormTest/SampleForm'
import MainDebounce from './components/Debouncing/DebounceExample/MainDebounce'
import AddMore from './components/AddmoreInputs/AddMore'
import SearchComponent from './components/SearchChat/SearchComponent'
function App() {

  return (
    <>
      <Navigation />
      <h1 className='text-center mt-32 bg-blue-500'>DEMO</h1>

      {/* it is custom hook for fetching data */}
      {/* <Index /> */}
      {/*  */}
      {/* <SampleForm/> */}

      {/* <MainDebounce /> */}

      {/* add more inputs */}
      {/* <AddMore /> */}
      {/* search chat data */}
      <SearchComponent/>
    </>
  )
}

export default App
