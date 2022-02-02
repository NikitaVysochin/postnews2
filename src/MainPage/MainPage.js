import './MainPage.scss';
import * as React from 'react';
import { useState } from 'react';
import Modal from './Modal/Modal';

const MainPage = () => {
  const [arr, setArr] = useState([
    {
      title: 'Заголовок',
      text: 'какой-то текст',
      link: 'ссылка',
      tags: 'теги всякие',
    },
    {
      title: 'Заголовок2',
      text: 'какой-то текст2',
      link: 'ссылка2',
      tags: 'теги всякие2',
    }, 
    {
      title: 'Заголовок2',
      text: 'какой-то текст2',
      link: 'ссылка2',
      tags: 'теги всякие2',
    }
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const dat = new Date();
  const [date, setDate] = useState(new Date(dat).getFullYear().toString()+'/'+new Date(dat).getMonth().toString()+'/'+new Date(dat).getDay().toString());

  const Save = (title, news, link, tags, date) => {
    setArr([...arr, {
      title,
      text: news,
      link: link,
      tags: tags,
      date,
    }]);
    handleClose()
  }

  console.log(arr);

  return (<>
    <Modal open={open} handleClose={handleClose} Save={Save} date={date}></Modal>
    <div className='button-add' onClick={handleOpen}>Add</div>
    <div className='main-container'>
      {arr.map((elem, index) => {
        return <div className='post-container' key={index}>
          <h2>{elem.title}</h2>
          <p>{elem.text}</p>
          <div>{elem.link}</div>
          <div>{elem.tags}</div>
          <div>{date}</div>
        </div>
        })}
    </div>
  </>);
}

export default MainPage;