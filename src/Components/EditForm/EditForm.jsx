import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editPostAction } from '../../Redux/Actions';

export default function EditForm ({ id, handleClose }) {
  const dispatch = useDispatch();
  const currentPost = useSelector(state=>state.post.posts.find(x=>x.id === id))
  const [inputs, setInputs] = useState({})
  const [tagInp, setTagInp] = useState("");
  const [arrTags, setArrTags] = useState([]);
  console.log(inputs.tags);

  const changeInp = (e, pattern, errorMessage) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const delTag = (index) => {
    setArrTags([...arrTags.slice(0, index), ...arrTags.slice(index + 1)]);
  };

  const addTags = (e) => {
    if (e.keyCode === 13) {
      if(tagInp !== ''){
        setArrTags([...arrTags, tagInp]);
        setTagInp(""); 
      }
    }
  };
  
  const Save = () => {
    if (inputs.title.trim() === "" || inputs.news.trim() === "") {
      alert("empty requared field");
    } else {
        handleClose();
         dispatch(editPostAction({...inputs, tags: arrTags}))
         setInputs(currentPost);
    }
  }; 

  useEffect(() => {
    if(!!tagInp ){setInputs({ ...inputs, tags:  arrTags })}
  }, [arrTags]);
   

  useEffect(()=>{
    if(!currentPost) return
    console.log(currentPost,'currentPost');
    setInputs(currentPost)
    setArrTags(currentPost.tags)
  },[currentPost])

  return (
    < >
      
        <div className="modal-main-container">
          <div className="modal-header">
            <label>введите заголовок *</label>
            <input
              name="title"
              value={inputs.title}
              onChange={(e) => changeInp(e, "klkl")}
            />
          </div>
          <div className="modal-news">
            <label>введите текст новости 22*</label>
            <textarea
              name="news"
              value={inputs.news}
              onChange={(e) => changeInp(e, "news")}
            />
          </div>
          <div className="modal-link">
            <label>введите ссылку</label>
            <input
              value={inputs.link}
              name="link"
              onChange={(e) =>
                changeInp(
                  e,
                  /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/
                )
              }
            />
          </div>
          <div className="modal-tags">
            <label>введите тег и нажмите enter</label>
            <input
              value={tagInp}
              onKeyDown={(e) => addTags(e)}
              onChange={(e) => setTagInp(e.target.value)}
            />
            <div className="main-tags">
              {arrTags.map((elem, index) => {
                return (
                  <div key={index+'4'} className="container-tag">
                    {elem}
                    <div className="but-X" onClick={() => delTag(index)}>
                      X
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>* - поля обязательны к заполнению</div>
          <div className="save-button" onClick={Save}>
            Save
          </div>
        </div>
     
    </ >
  );
}
