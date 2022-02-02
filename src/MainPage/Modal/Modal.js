import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Modal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height: 400,
  p: 4,
};

export default function BasicModal({ open, handleClose, Save, date }) {
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState('');
  
  
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
            <input value={news} onChange={(e)=>{setNews(e.target.value)}}/>
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
