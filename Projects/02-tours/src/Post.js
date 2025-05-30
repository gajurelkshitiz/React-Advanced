import React, { useState } from "react";

const Post = ({id, title, body, removeTour}) => {
    const [readMore, setReadMore] = useState(true);

    return <div>
        <h2 className="title">{title}</h2>
        <p className='bg-blue'> 
            {readMore ? body : `${body.substring(0,20)}...`} 
            <button onClick={() => setReadMore(!readMore)}> {readMore ? 'Show Less' : 'Read More'} </button>
        </p>
        <div className="flex justify-center mt-4">
            <button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeTour(id)}> 
                Not Interested 
            </button>
        </div>
    </div>
}

export default Post