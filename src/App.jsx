import { useEffect, useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [lastCredit, setLastCredit] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0)
  // const [totalPrice, setTotalPrice] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    setTotalCreditHour(blog.credit_hour);

  }

  console.log("last", totalCreditHour);
  console.log("total credit", lastCredit);

  useEffect(() => {
      setLastCredit((lastCredit) => lastCredit + totalCreditHour);
    }, [totalCreditHour]);
    console.log("last credit ",lastCredit);


  return (
    <>

      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark}
         
          >  </Blogs>

        <Bookmarks
          bookmarks={bookmarks}
          lastCredit={lastCredit}
          
        ></Bookmarks>
      </div>


    </>
  )
}

export default App
