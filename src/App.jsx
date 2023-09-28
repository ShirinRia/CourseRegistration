import './App.css'
import Courses from './components/Courses/Courses'
import Head from './components/Head/Head'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
function App() {
  const [regcourse,setregcourse]=useState([])
  const [credit,setcredit]=useState(0);

  const handleregcourse=(course)=>{
    const newregcourse=[...regcourse,course];
    setregcourse(newregcourse)
  }

  const handlecredit=(time)=>{
    const newcredit=credit+time;
    setcredit(newcredit)
  }

  return (
    <>
      
      <Head>

      </Head>

      <main className='mb-20 mx-9'>
        <section className='flex gap-6'>
          <Courses 
          handleregcourse={handleregcourse}
          handlecredit={handlecredit}>
          
          </Courses>

          <Cart regcourse={regcourse}
          credit={credit}>

          </Cart>
        </section>
      </main>
     
    </>
  )
}

export default App
