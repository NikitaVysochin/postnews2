import * as React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import Modal from './Modal/Modal';
import imgSort from '../img/sort.png';
import imgDwn from '../img/down.png';
import './MainPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction } from '../Redux/Actions';
  

const MainPage = () => {
  const posts = useSelector((store)=>store.posts)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(!open);
  const handleOpen = () => setOpen(true);
  const [check, setCheck] = useState(false);
  const [inpFiltr, setInpFiltr] = useState('');
  console.log(posts,'posts');

  const Sort = () => {
    posts.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (check === false) posts.reverse();
    setCheck(!check)
  }

  const addPost = (inputs) => {
    dispatch(addPostAction({...inputs, 'date': new Date(), 'id': nanoid(10)}))
   }

  const Filtr = (el) => {
    return el.title.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1 || el.news.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1;
}

  return (<>
    <div className='filtr'>
      <p>введите фильтр</p>
      <input onChange={(e)=>setInpFiltr(e.target.value)} ></input>
    </div>
    <Modal 
      handleClose={handleClose}
      addPost={addPost} 
      open={open}
    />
    <div className='button-container'>
      <div className='button-sort' onClick={()=>Sort()}><img src={check? imgDwn:imgSort} /></div>
      <div className='button-add' onClick={handleOpen}>Add</div>
    </div>
    <div className='main-container'>
      {posts.filter((el)=> Filtr(el)) 
      .map((elem, index) => {
        return <>
          <Link to={`/post/${elem.id}`} >
            <div 
              className='post-container' 
              key={elem.id}
            >
              <h2>{elem.title}</h2>
              <p>{elem.news}</p>
              <div><a href='elem.link'>{elem.link}</a></div>
              <div className='container-tags'>{elem.tags.map(elem=>{return <span>{elem},</span>})}</div>
              <div>{moment(elem.date).format('LTS')}</div>
            </div>
          </Link>
        </>
          })}
      </div>
  </>);
}

export default MainPage;