import * as React from 'react';
import { useState } from 'react';
import moment from "moment";
import Modal from './Modal/Modal';
import imgSort from '../img/sort.png';
import './MainPage.scss';

const MainPage = () => {
  const [arr, setArr] = useState([]);

  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const dat = new Date();
  const [date, setDate] = useState(dat);
  const [check, setCheck] = useState(false);
  console.log('date', date);

  const Sort = () => {
    arr.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (check === false) arr.reverse();
    setArr([...arr]);
    setCheck(!check)
  }
  console.log(arr);
  return (<>
    <Modal 
      open={open} 
      date={date} 
      setArr={setArr} 
      setOpen={setOpen} 
      open={open}
      arr={arr}
    />
    <div className='button-container'>
      <div className='button-sort' onClick={()=>Sort()}><img src={imgSort} /></div>
      <div className='button-add' onClick={handleOpen}>Add</div>
    </div>
    <div className='main-container'>
      {arr.map((elem, index) => {
        return <div className='post-container' key={index}>
          <h2>{elem.title}</h2>
          <p>{elem.text}</p>
          <div>{elem.link}</div>
          <div>{elem.tags}</div>
          <div>{moment(elem.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
        })}
    </div>
  </>);
}

export default MainPage;

/*new Date(dat).getFullYear().toString()+'/'+new Date(dat).getMonth().toString()+'/'+new Date(dat).getDay()+'/'+new Date(dat).getHours()+'/'+new Date(dat).getSeconds().toString()*/