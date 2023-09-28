import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {course_name,course_description,price,credit,image_url} = course
    return (

        <div className="card card-compact w-[312px] bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
                <img src={image_url} alt={course_name} className="rounded-xl w-full" />
            </figure>
        <div className="card-body space-y-2">
        <h2 className="text-lg font-semibold">{course_name}</h2>
        <p className='text-sm font-normal'>{course_description}</p>
        <div className="card-actions">
        <button className="btn text-white w-full bg-[#2F80ED] border-none">Select</button>
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