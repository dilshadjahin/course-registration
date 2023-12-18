import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks,lastCredit}) => {
    console.log(bookmarks);
   
    
    return (
        
        <div className="md:w-1/4 bg-gray-300 ml-4">
           
            <div>
            
            <h2 className="text-xl font-bold ">Course Name: {bookmarks.length}</h2>
            </div>


            {
                bookmarks.map(bookmark =>
                   <>
                    
                    <Bookmark
                     length={bookmarks.length}
                     key={bookmark.price}
                     bookmark ={bookmark}
                     lastCredit={lastCredit}
                    
                     >

                </Bookmark>
                   </>)
            }
            
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    lastCredit: PropTypes.number,
   
    
}

export default Bookmarks;