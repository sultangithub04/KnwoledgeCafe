import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark, handleMarksAsRead}) => {
    const [blogs, setBlogs] =useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            
                {
                    blogs.map(blog=><Blog  handleMarksAsRead={handleMarksAsRead} handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog}></Blog>)
                }
            

        </div>
    );
};
Blogs.PropTypes={
    handleAddToBookmark: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}
export default Blogs;