
import PropTypes from 'prop-types';

import { FaDollarSign } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleCreditHour, handleTotalPrice }) => {

    const { course_title, image_url, paragraph, price, credit_hour } = blog;
  
  




    return (
        <div className='w-[100%] h-auto'>
            <div className='flex justify-center items-center'>
                <img src={image_url} alt="" className='bg-cover bg-center' />
            </div>
            <div className='m-4'>
                <h3 className='text-lg font-semibold'>{course_title}</h3>
                <p className='text-sm leading-6 text-[#1C1B1B]'>{paragraph}</p>
                <div className='flex justify-between my-3'>
                    <div className='flex'>
                        <div className=' m-1'><FaDollarSign /></div>

                        <button onClick={()=> handleTotalPrice(price)}>

                        <span >Price: {price}</span>

                        </button>
                        
                    </div>
                    <div className='flex gap-1'>
                        <div className='m-1 font-bold'><IoBookOutline /> </div>
                        <button
                        onClick={()=> handleCreditHour(credit_hour)}
                        > <span>Credit: {credit_hour} hr</span> </button>
                       
                    </div>
                </div>
                <button
                    onClick={() =>{handleAddToBookmark(blog)}}
                    type="button" className='bg-[#2F80ED] p-3 rounded-lg text-white w-full'> Select
                </button>
            </div>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleCreditHour : PropTypes.func,
    handleTotalPrice : PropTypes.func
    
    
}

export default Blog;