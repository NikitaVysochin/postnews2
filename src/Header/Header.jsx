import React from 'react' 
import imgSort from "../img/sort.png";
import imgDwn from "../img/down.png";

function Header({ setInpFiltr, Sort, setOpen, check, flag, open }) {

  return (
    <div className="filtr">
         <><div className="filtr_block"> 
          <p>введите фильтр</p>
          <input onChange={(e) => setInpFiltr(e.target.value)}></input>
        </div>
        <div className="filtr_block">  
            <div className="button-sort" onClick={() => Sort()}>
              <img src={check ? imgDwn : imgSort} />
            </div>
            <div className="button-add" onClick={()=> setOpen(true)}>
              Add
            </div>
        </div></>
      </div>
  )
}

export default Header
