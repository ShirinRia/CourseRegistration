import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
    return (
        <div>
              <button onClick={() => toast("Total Credit hour limit is 20!")}></button>
              <ToastContainer />
          </div> 
    );
};

export default Toaster;