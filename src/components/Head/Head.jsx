import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Head = () => {
    return (
        <header>
            <h1 className="text-4xl font-bold text-center mb-12 py-5 pt-5">
                Course Registration
            </h1>
            <div>
              <button onClick={() => toast("Total Credit hour limit is 20!")}></button>
              <ToastContainer />
          </div> 
        </header>
    );
};

export default Head;