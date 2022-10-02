import { useState } from "react";
import { islands } from "./islands";
import './App.css';

function Slides(){
    const [foto, setFoto]= useState(0);
    const {fact, image}= islands[foto];

    const previousIsland=()=>{
        setFoto((foto=>{
            foto --;
            if (foto<0){
                return islands.length-1
            }
            return foto
        }))
    }

    const nextIsland =()=>{
        setFoto((foto=>{
            foto++;
            if(foto>islands.length-1){
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
        <img src={image} width="300px" alt="foto"></img>
        </div>
        <div className="container">
            <button className="btnNexAndPrevious" onClick={previousIsland}>Предыдущий</button>
            <button  className="btnNexAndPrevious" onClick={nextIsland}>Следующий</button>
        </div>

    </div>)
}

export default Slides;