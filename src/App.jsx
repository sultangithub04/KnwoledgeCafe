import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }
  const handleMarksAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex mx-auto max-w-7xl'>
        <Blogs handleMarksAsRead={handleMarksAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>
      </div>
    </>
  )
}

export default App
