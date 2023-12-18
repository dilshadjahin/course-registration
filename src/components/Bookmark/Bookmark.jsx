import PropTypes from 'prop-types';




const Bookmark = ({ bookmark,lastCredit }) => {

    

    const { course_title, credit_hour, price } = bookmark;
   
 


 




    return (
        <>
           <h2>Credit Hour Remaining {lastCredit}  hr</h2>
            <div className='bg-slate-200 p-4 m-4 rounded-xl'>

                <h3 className='text-base'>{course_title} </h3>
                <h3 className='text-base'>{credit_hour} </h3>
                <h3 className='text-base'>{price} </h3>

            </div>
        </>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,    
    lastCredit: PropTypes.number,    


}

export default Bookmark;