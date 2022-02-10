import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.scss';

export default function BasicModal({ addPost, handleClose, open }) {
  const [inputs, setInputs] = useState({});
  const [errors,setErrors]= useState({
    title: '',
    news: '',
    link: ''
  })
  const [tagInp, setTagInp] = useState('');
  const [arrTags, setArrTags] = useState([]);

  const changeInp = (e, pattern, errorMessage) => {
    if(e.target.name=='link'){
      if(!pattern.test(e.target.value)){
        setErrors({...errors, [e.target.name]: e.target.value});
      } 
    }
    if(e.target.name=='title' || e.target.name=='news') {
        setErrors({...errors, [e.target.name]: e.target.value});
    }
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  
  const delTag = (index) => {
    setArrTags([...arrTags.slice(0,index), ...arrTags.slice(index+1)]);
  }

  const Tags = (e) => {
    if (e.keyCode === 13) {
      setArrTags([...arrTags, tagInp]);
      setTagInp('')
    }
  }
  
  const Save = () => {
    if(errors.title.trim() == '' || errors.news.trim() == '') {
      alert('empty requared field');
    }
     else { if(errors.link!==''){
         alert("ссылка некорректна");
      } 
     else {
      addPost(inputs);
      handleClose();
      setArrTags([]);
      setInputs({})
      setErrors({
        title: '',
        news: '',
        link: ''
      });
    }}
  }

  useEffect(()=>{
    setInputs({...inputs, tags: arrTags})
  },[arrTags])

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
              name='title'
              value={setInputs.title} 
              onChange={(e)=>changeInp(e,'klkl')}
              
            />
            </div>
            <div className='modal-news'>
              <label>введите текст новости *</label>
            <textarea 
              name='news'
              value={setInputs.news} 
              onChange={(e)=>changeInp(e, 'news')}
            />
            </div>
            <div className='modal-link'>
              <label>введите ссылку</label>
            <input 
              value={inputs.link} 
              name='link'
              onChange={(e)=>changeInp(e, /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/)}
            />
            </div>
            <div className='modal-tags'>
              <label>введите тег и нажмите enter</label>
              <input 
                value={tagInp} 
                onKeyDown={(e)=>Tags(e)} 
                onChange={(e)=>setTagInp(e.target.value)}
              />
              <div className='main-tags'>
                {arrTags.map((elem, index)=>{
                  return <div key={index} className='container-tag'>{elem}
                    <div className='but-X' 
                      onClick={()=>delTag(index)}>X
                    </div>
                  </div>})}
              </div>
            </div>
            <div>* - поля обязательны к заполнению</div>
            <div className='save-button' onClick={()=>Save()}>Save</div>      
          </div>
        </Box>
      </Modal>
    </div>
  );
}
