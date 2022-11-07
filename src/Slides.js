import { useState } from "react";
import { cats } from "./cats";
import './App.css';

function Slides(){
    const [foto, setFoto]= useState(0);
    const {fact, image}= cats[foto];

    const previousCat=()=>{
        setFoto((foto=>{
            foto --;
            if (foto<0){
                return cats.length-1
            }
            return foto
        }))
    }

    const nextCat =()=>{
        setFoto((foto=>{
            foto++;
            if(foto>cats.length-1){
                foto=0;
            }
            return foto;
        }))
    }
    return(
    
        <div>
        <div className="container">
        <p className="aboutText">{ fact }</p>
        </div>
        <div className="container">
        <img className="slideImage" src={image} width="300px" alt="foto"></img>
        </div>
        <div className="container">
            <button className="btnNexAndPrevious" onClick={previousCat}>Предыдущий</button>
            <button  className="btnNexAndPrevious" onClick={nextCat}>Следующий</button>
        </div>

    </div>)
}

export default Slides;
