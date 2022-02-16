import * as React from "react";
import { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";  
import "./MainPage.scss"; 
import { EditModal } from "../Modals/EditModal";
import Post from "../Components/Post";
import Header from "../Header/Header";
import { AddModal } from "../Modals/AddModal";

const MainPage = () => {
  const [check, setCheck] = useState(false);
  const [inpFiltr, setInpFiltr] = useState("");
  const posts = useSelector((store) => store.post.posts);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const Sort = () => {
    posts.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (check === false) posts.reverse();
    setCheck(!check);
  };

  const Filtr = (el) => {
    return (
      el.title.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1 ||
      el.news.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1
    );
  };
  console.log(open);
  return (
    <>
    <Header open={open} setInpFiltr={setInpFiltr} Sort={Sort} setOpen={setOpen} check={check} />
      
      <AddModal open={open} handleClose={() => setOpen(false)} />
  
      <div className="main-container">
        {posts
          .filter((el) => Filtr(el))
          .map((elem, index) =>  <Post key={elem.id} elem={elem}/> 
           )}
      </div>
    </>
  );
};

export default MainPage;
