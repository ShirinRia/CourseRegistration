import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {course_name,course_description,price,credit,image_url} = course
    return (
        <div className="card w-[335px] bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image_url} alt={course_name} className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title text-lg font-semibold text-left">{course_name}</h2>
                <p>{course_description}</p>
                <div className="card-actions w-full">
                   <button className="btn btn-primary w-full bg-[#2F80ED] border-none">Select</button>
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