import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import { FaBookmark  } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarksAsRead, readingTime }) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover} alt={`Cover pictiue of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>

                </div>  
                <div>
                    <span>{reading_time} read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'> <FaBookmark ></FaBookmark></button>
                </div> 
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=><span className='pr-3' key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarksAsRead(id, reading_time)} className='text-purple-500 font-bold underline'>Reading time</button>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.object
}
export default Blog;