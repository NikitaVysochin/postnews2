import { useParams } from 'react-router-dom';
import { useState } from 'react';
import moment from "moment"; 
import './OpenPost.scss';
import {  useSelector } from 'react-redux'; 
import { EditModal } from '../Modals/EditModal';
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../Header/Header';

 


function OpenPost() {
  const history = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const selectPost = (id) => (store) => store.post.posts.find((elem) => elem.id===id);
  const [open, setOpen] = useState(false)
  const post = useSelector(selectPost(id))
  const [flag, setFlag] = useState(0)

  if(!post) {
    // history('/')
    window.location.href = '/'
  } 
  
  
  // if(location.pathname == `/post/${id}`) {
  //     setFlag(1)
  //    // console.log('location',location.pathname)
  // }

  

  return (<>
    <Header flag={flag} />
     <EditModal 
      open={open} 
      handleClose={() => setOpen(false)}
      id={id}
    />
        <div className='post-container' key={`${post.id}, ${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.news}</p>
            <div>{post.link && <a href={post.link}>{post.link}</a>}</div>
            <div className='container-tags'>{post.tags.map((tag,idx,arr)=>{return <span>{tag}{idx < arr.length-1 && ','}</span>})}</div>
            <div>{moment(post.date).format('LTS')}</div>
            <button onClick={()=>{
              setOpen(true)
            }}>edit</button>
        </div>
      </>)
}

export default OpenPost;