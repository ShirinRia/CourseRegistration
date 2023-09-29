import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDollarSign } from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
const Course = ({course,handleregcourse,handlecredit,checkcredit}) => {
//    console.log(snakebar)
    const {course_name,course_description,price,credit,image_url} = course;
    const t=()=>{
        handleregcourse(course) ; 
        handlecredit(credit); 
        if(checkcredit+credit>20)
        toast("Total Credit hour limit is 20!")

    }
    
    return (

        <div className="card card-compact w-[312px] bg-base-100">
        <figure className="px-4 pt-4">
                <img src={image_url} alt={course_name} className="rounded-xl w-full" />
            </figure>
        <div className="card-body space-y-2">
        <h2 className="text-lg font-semibold">{course_name}</h2>
        <p className='text-sm font-normal'>{course_description}</p>
        <div className='flex justify-between gap-4'>
            <p className='flex items-center gap-2 text-base font-medium'>
              <FaDollarSign/> Price: {price}
            </p>
            <p className='flex items-center gap-2 text-base font-medium'> 
                <BsBook/>
            Credit : {credit} hr
            </p>
        </div>
        <div className="card-actions">
        <button onClick={t} className="btn text-white w-full bg-[#2F80ED]  hover:text-[#2F80ED] hover:bg-white hover:border-2">Select</button>
        </div>
        </div>
        </div>
        
    );
};
Course.prototype = {
    course_name: PropTypes.string,
    course_description: PropTypes.string,
    price: PropTypes.number,
    credit: PropTypes.number,
    image_url: PropTypes.string,
    course: PropTypes.object,
}
export default Course;