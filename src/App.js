import {useState} from "react";
import { data } from "./data";
import './App.css';
import Slides from "./Slides";

function App() {

const [cats, setcats]=useState(data);
const [showText, setShowText] = useState(false);

const removeCat=(id)=>{
  let newcats=cats.filter(cat=> cat.id !== id)
  setcats(newcats);
}

const showTextClick = (element)=> {
  element.showMore=!element.showMore
  setShowText(!showText)
}

return (
    <div className="big" >

    <div className="container">
      <h1 className="heading" >Описание {cats.length} самых известных пород кошек</h1>
    </div>
    {cats.map((element=>{
      const {id, name, image, description, showMore}= element;
      return(

        <div className="card"  key={id}>

          <div className="container">
            <img className="foto" src={image} alt="foto" width="250px"/>
          </div>

          <div className="container">
            <h2>{id}.  {name}</h2>
          </div>

          <div className="container">
            <p className="aboutText">{ showMore ? description : description.substring(0, 50)}
            <button className="btn" onClick={()=>showTextClick(element)}>{showMore ? "Свернуть" : "Развернуть"} </button>
            </p>
          </div>

          <div className="container">
          <button className="btnDelete" onClick={()=>removeCat (id)}>Удалить</button>
        </div>

        

        </div>
      )
    }
    
    ))}

        <div className="container">
          <button className="btnDeleteAll" onClick={()=>setcats ([])}>Удалить все</button>
        </div>


  <div className="slideContainer">
    
  <div className="container">
    <h2 className="heading">Интересные факты о кошках</h2>
   </div> 
   <div className="container">
      <Slides/>
    </div>
</div>

</div>
  );

 
  
}

export default App;
