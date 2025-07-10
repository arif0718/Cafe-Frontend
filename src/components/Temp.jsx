import React, { useState } from 'react'

// const Temp = () => {
//     const handleClick = () => {
//         alert("Hello world");
//     }

// const handleSubmit = (name) => {
//     alert(`hello ${name}`);
// }

//   return (
//     <div>
//         <button onClick={handleClick}> Click</button>
//         <button onClick={ () => handleSubmit("John")}> Submit</button>
//     </div>
//   )
// }

// export default Temp


export default function Temp() {
    const [score, setScore] = useState(0);

    const addValue = () => {
        setScore(score + 1);
    }
    const decreaseValue = () => {
        setScore(score - 1);
    }

    return (<div>
        <h1> {score} </h1>
        <button onClick={ () => addValue()}>Increase score</button>
        <button onClick={ () => decreaseValue()}>Decrease score</button>
    </div>)
}