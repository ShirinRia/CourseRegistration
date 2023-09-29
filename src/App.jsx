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
    setregcourse(newregcourse)
  }
// const handletoasting=(newcredit)=>{
//   toasting=true
//   console.log(newcredit,toasting)
// }
  const handlecredit=(time)=>{
    const newcredit=credit+time;
   
   if(newcredit<=20){
      setcredit(newcredit)
      // console.log(newcredit)
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




// function App(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }
export default App
