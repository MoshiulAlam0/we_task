import React from 'react'
import Head from './Component/head'
import TodoContainer from './Component/TodoContainer'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='relative bg-[#334fa1] w-screen min-h-screen pb-[30px]'>
      <Head/>
      <TodoContainer/>
      <Footer/>
    </div>
  )
}

export default App
