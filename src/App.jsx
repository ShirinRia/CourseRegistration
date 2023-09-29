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
    console.log(f.length);
    if(f.length===1){
      setregcourse(newregcourse)
      handlecredit(course.credit)
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
          handlecredit={handlecredit}
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
