import './App.css'
import Courses from './components/Courses/Courses'
import Head from './components/Head/Head'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [regcourse,setregcourse]=useState([])
  // const [toasting,settoasting]=useState(false)
  // let toasting=false
  const [credit,setcredit]=useState(0);
  
  const handleregcourse=(course)=>{

    const newregcourse=[...regcourse,course];
    const f=newregcourse.filter(n=>n.id === course.id)
    
  const len=f.length;
    if(len===1){
      setregcourse(newregcourse)
      handlecredit(course.credit)
      // console.log(f.length)
    }
    
  }

  const handlecredit=(time)=>{
    const newcredit=credit+time;
   
   if(newcredit<=20){
      setcredit(newcredit)
      
    }
 
  }

  return (
    <>
      
      <Head>

      </Head>

      <main className='pb-20 mx-9'>
         
        <section className='flex gap-6'>
       
          <Courses 
          handleregcourse={handleregcourse}
         
          checkcredit={credit}
         
          >
          
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
