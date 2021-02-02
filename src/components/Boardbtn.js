import React, { useState } from 'react'


const Boardbtn = ({ index, btnClicked , boardArray }) => {

    return (
        <button onClick={ btnClicked(index) } className="pp">{boardArray[index]}</button>
    );
}

export default Boardbtn;