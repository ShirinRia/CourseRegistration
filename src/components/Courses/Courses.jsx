import { useEffect, useState } from "react";
import Course from "./Course";
import PropTypes from 'prop-types'; // ES6


const Courses = ({handleregcourse,checkcredit}) => {
    const [Courses, setCourses]=useState([])
    // console.log(checkcredit)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-5">
            {
            Courses.map(course => 
            <Course 
            key={course.id}
            course={course}
            handleregcourse={handleregcourse}
            
            checkcredit={checkcredit}
           
            >

            </Course>
        )
    }
        </div>
        
    );
};
Courses.propTypes = {
    Courses:PropTypes.object,
   
    handleregcourse : PropTypes.func,
    checkcredit : PropTypes.number,
   
  

};
export default Courses;