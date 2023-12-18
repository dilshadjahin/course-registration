import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark, handleCreditHour, handleTotalPrice}) => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className="max-w-5xl mx-auto pt-10">
            <h1>Blogs: {blogs.length}</h1>

            <div className=" grid md:grid-cols-3 gap-10">


                {

                    blogs.map((blog,index) =>
                        <Blog
                            key={index}
                            blog={blog}
                            handleAddToBookmark={handleAddToBookmark}
                            handleCreditHour = {handleCreditHour}
                            handleTotalPrice = {handleTotalPrice}
                           
                        ></Blog>)
                }

            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleCreditHour: PropTypes.func,
    handleTotalPrice : PropTypes.func
}

export default Blogs;