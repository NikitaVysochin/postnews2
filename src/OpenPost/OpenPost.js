import { useParams } from 'react-router-dom';
import moment from "moment";
import './OpenPost.scss';
import { useDispatch, useSelector } from 'react-redux';

 
function OpenPost() {
  
  const arr = useSelector((store)=>store.posts)
  const {id} = useParams();
  console.log(id,'kl');

  return (<>
         {arr.map((route, index) => { 
       return route.id == id && 
        <div className='post-container' key={`${index}, ${route.id}`}>
            <h2>{route.title}</h2>
            <p>{route.news}</p>
            <div><a href='elem.link'>{route.link}</a></div>
            <div className='container-tags'>{route.tags.map(route=>{return <span>{route},</span>})}</div>
            <div>{moment(route.date).format('LTS')}</div>
        </div>
         })}
      </>)
}

export default OpenPost;