import './App.css'
import Courses from './components/Courses/Courses'
import Head from './components/Head/Head'
import Cart from './components/Cart/Cart'
function App() {

  return (
    <>
      
      <Head>

      </Head>

      <main className='mb-20 mx-9'>
        <section className='flex gap-6'>
          <Courses >

          </Courses>

          <Cart className='flex-grow-1'>

          </Cart>
        </section>
      </main>
     
    </>
  )
}

export default App
