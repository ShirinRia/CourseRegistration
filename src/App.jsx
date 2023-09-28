import './App.css'
import Courses from './components/Courses/Courses'
import Head from './components/Head/Head'
import Cart from './components/Cart/Cart'
function App() {

  return (
    <>
      
      <Head>

      </Head>

      <main>
        <section className='flex gap-6'>
          <Courses classname='w-2/3'>

          </Courses>

          <Cart className='w-1/3'>

          </Cart>
        </section>
      </main>
     
    </>
  )
}

export default App
