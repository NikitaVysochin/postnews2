import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.scss';

export default function BasicModal({ date, setArr, setOpen, arr, open }) {
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState('');
  const [arrTags, setArrTags] = useState([]);

  const delTag = (index) => {
    setArrTags([...arrTags.slice(0,index), ...arrTags.slice(index+1)]);
  }

  const Tags = (e) => {
    if (e.keyCode === 13) {
      setArrTags([...arrTags, tags]);
      setTags('')
    }
    console.log('arrTags', arrTags , 'e.keyCode', e.keyCode);
  }

  const Link = (e) => {
    setLink(e.target.value);
  }

  const isUrl = (str) => /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(str) ;
  
  const Save = (date) => {

    if (title.trim()!=='' &&
        news.trim()!=='' && 
        link.trim()=='' ||
        /*link.split('').slice(0,4).join('')=='http' &&
        link.split('').slice(-3).join('')=='com'*/
        isUrl(link)
        ) {
      setArr([...arr, {
        title,
        text: news,
        link: link,
        tags: arrTags,
        date: new Date()
      }]);

    setTitle('');
    setNews('');
    setLink('');
    setTags('');
    handleClose();
  } 
  if(link.trim()!==''){
    if (isUrl(link)==false) alert('введите корректный email');
  }
  if (title.trim()=='' || news.trim()=='') alert('заполните все поля')
  console.log(link.split('').slice(-3).join(''));
  
  setArrTags([]);
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className='box'>
          <div className='modal-main-container'>
            <div className='modal-header'>
              <label>введите заголовок *</label>
            <input 
              value={title} 
              onChange={(e)=>{setTitle(e.target.value)}}
              required
            />
            </div>
            <div className='modal-news'>
              <label>введите текст новости *</label>
            <textarea value={news} onChange={(e)=>{setNews(e.target.value)}}/>
            </div>
            <div className='modal-link'>
              <label>введите ссылку (введите вначале http, а в конце com)</label>
            <input value={link} onChange={(e)=>Link(e)}/>
            </div>
            <div className='modal-tags'>
              <label>введите теги</label>
            <input value={tags} onKeyDown={(e)=>Tags(e)} onChange={(e)=>{setTags(e.target.value)}}/>
            <div className='main-tags'>{arrTags.map((elem, index)=>{return <div key={index} className='container-tag'>{elem}<div className='but-X' onClick={()=>delTag(index)}>X</div></div>})}</div>
            </div>
            <div>* - поля обязательны к заполнению</div>
            <div className='save-button' onClick={()=>Save(title, news, link, tags, date)}>Save</div>      
          </div>
        </Box>
      </Modal>
    </div>
  );
}
