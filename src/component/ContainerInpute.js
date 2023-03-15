import React, { useState } from 'react';

const ContainerInpute = () =>  {
    const [textVal,setTextVal] = useState(""); 

    const textValChangeHandler = (valeur) => { 
        setTextVal(valeur);
    }

   
    return <>
    <div> 
       <h1> heelo </h1>
        <input type="text" placeholder='entrez votre tache' value={textVal}> </input>
        <button onClick={textValChangeHandler(textVal)}> + </button>
    </div>

    </>
}

export default ContainerInpute;