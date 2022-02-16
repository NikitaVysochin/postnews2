import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';

function Post({elem}) {
  return (
   <div className="post-container">
  
                  
    <h2>{elem.title}</h2>
    <p>{elem.news}</p>
    <div>
      {elem?.link && <a target='_blank' rel="noopener noreferrer" href={elem.link}>{elem.link}</a>   }
    </div>
    <div className="container-tags">
      {elem.tags.map((tag, index, arr) => {
        return <span key={index}>{tag}{index < arr.length-1 && ','} </span>;
      })}
    </div>
    <div>{moment(elem.date).format("LTS")}</div>
    <Link to={`/post/${elem.id}`}     >show deatils 

</Link></div>
  )
}

export default Post

 

