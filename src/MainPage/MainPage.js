import * as React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import Modal from './Modal/Modal';
import imgSort from '../img/sort.png';
import imgDwn from '../img/down.png';
import './MainPage.scss';

const MainPage = ({ setRoute }) => {
  const [arr, setArr] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(!open);
  const handleOpen = () => setOpen(true);
  const [check, setCheck] = useState(false);
  const id = `f${(+new Date).toString(16)}`;

  const Sort = () => {
    arr.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (check === false) arr.reverse();
    setArr([...arr]);
    setCheck(!check)
  }

  const addPost = (inputs) => {
    setArr([...arr, {...inputs, 'date': new Date(), 'id': nanoid(10)}]);
  }
  
  return (<>
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
      {arr.map((elem, index) => {
        return <>
          <Link to={`/post/${elem.id}`} onClick={()=>setRoute(elem)} >
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