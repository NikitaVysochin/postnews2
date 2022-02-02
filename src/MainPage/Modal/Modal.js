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
  
  const Save = (date) => {
    setArr([...arr, {
      title,
      text: news,
      link: link,
      tags: tags,
      date: new Date()
    }]);
    setTitle('');
    setNews('');
    setLink('');
    setTags('');
    handleClose();
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
              <label>введите заголовок</label>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className='modal-news'>
              <label>введите текст новости</label>
            <textarea value={news} onChange={(e)=>{setNews(e.target.value)}}/>
            </div>
            <div className='modal-link'>
              <label>введите ссылку</label>
            <input value={link} onChange={(e)=>{setLink(e.target.value)}}/>
            </div>
            <div className='modal-tags'>
              <label>введите теги</label>
            <input value={tags} onChange={(e)=>{setTags(e.target.value)}}/>
            </div>
            <div className='save-button' onClick={()=>Save(title, news, link, tags, date)}>Save</div>      
          </div>
        </Box>
      </Modal>
    </div>
  );
}
