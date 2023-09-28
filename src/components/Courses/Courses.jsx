import { useEffect, useState } from "react";
import Course from "./Course";


const Courses = () => {
    const [Courses, setCourses]=useState([])
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
            >

            </Course>
        )
    }
        </div>
        
    );
};

export default Courses;