import React, { useState } from 'react';
import Boardbtn from './Boardbtn';
import Options from './Options';



function Board() {
    const [boardArray, setBoardArray] = useState(Array(9).fill("_"));
    const [wins, setWins] = useState(0);
    const [ties, setTies] = useState(0);
    const [losses, setLosses] = useState(0);
    const [gameCondition, setGameCondition] = useState("");

    const btnClicked = index => {
        console.log("hey");
        var boardCopy = [...boardArray];
        if (boardCopy[index] !== "X" && boardCopy[index] !== "O") {
            boardCopy[index] = "X";
            var newBoardCopy = [...boardCopy];

            const newBoard = computerTurn(newBoardCopy);
            setBoardArray(newBoard);
            checkGame(newBoard);
            return null;
        }
        else {
            return null;
        }
    }

    const checkGame = (aBoardArray) => {
        
        const winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        winCombos.forEach((combos) => {
            if(aBoardArray[combos[0]] !== "_" && aBoardArray[combos[0]] === aBoardArray[combos[1]] && aBoardArray[combos[1]] === aBoardArray[combos[2]]) {
                if(aBoardArray[combos[0]] === "X") {
                    setGameCondition("You Won!");
                    const currentWins = wins + 1;
                    setWins(currentWins);
                }
                else {
                    setGameCondition("You Lost!");
                    const currentLosses = losses + 1;
                    setLosses(currentLosses);
                }
            }
        })
        var count = 0;
        for (var i = 0; i < 9; i++) {
            if (aBoardArray[i] !== "_") {
                count++;
            }
        }
        if (count === 9) {
            setGameCondition("You Tied!");
            const currentTies = ties + 1;
            setTies(currentTies);
        }
    }

    const computerTurn = (aBoardCopy) => {
        const vertWin = verticalWin(aBoardCopy);
        const horizWin = horizontalWin(aBoardCopy);
        const diagWin = diagonalWin(aBoardCopy);
        const vertDef = verticalDef(aBoardCopy);
        const horizDef = horizontalDef(aBoardCopy);
        const diagDef = diagonalDef(aBoardCopy);
        const specialMove = specialMoves(aBoardCopy);

        if (vertWin !== null) { return vertWin; }
        else if (horizWin !== null) { return horizWin; }
        else if (diagWin !== null) { return diagWin; }
        else if (vertDef !== null) { return vertDef; }
        else if (horizDef !== null) { return horizDef; }
        else if (diagDef !== null) { return diagDef; }
        else if (specialMove !== null) { return specialMove; }

        for (var i = 0; i < aBoardCopy.length; i++) {
            if (aBoardCopy[i] === "_") {
                aBoardCopy[i] = "O";
                break;
            }
        }

        return aBoardCopy;
    }

    const verticalWin = (aBoardCopy) => {
        var boardCopy1 = [...aBoardCopy];
        const columnLetters1 = boardCopy1[0] + boardCopy1[3] + boardCopy1[6] + "";
        const columnLetters2 = boardCopy1[1] + boardCopy1[4] + boardCopy1[7] + "";
        const columnLetters3 = boardCopy1[2] + boardCopy1[5] + boardCopy1[8] + "";

        var played = false;

        if (columnLetters1 === "OO_") { boardCopy1[6] = "O"; played = true;}
        else if (columnLetters1 === "O_O") { boardCopy1[3] = "O"; played = true;}
        else if (columnLetters1 === "_OO") { boardCopy1[0] = "O"; played = true;}
        else if (columnLetters2 === "OO_") { boardCopy1[7] = "O"; played = true;}
        else if (columnLetters2 === "O_O") { boardCopy1[4] = "O"; played = true;}
        else if (columnLetters2 === "_OO") { boardCopy1[2] = "O"; played = true;}
        else if (columnLetters3 === "OO_") { boardCopy1[8] = "O"; played = true;}
        else if (columnLetters3 === "O_O") { boardCopy1[5] = "O"; played = true;}
        else if (columnLetters3 === "_OO") { boardCopy1[2] = "O"; played = true;}
        
        if (played === true) {
            return boardCopy1;
        }
        else {
            return null;
        } 
    }

    const horizontalWin = (aBoardCopy) => {
        var boardCopy2 = [...aBoardCopy];
        const rowLetters1 = boardCopy2[0] + boardCopy2[1] + boardCopy2[2] + "";
        const rowLetters2 = boardCopy2[3] + boardCopy2[4] + boardCopy2[5] + "";
        const rowLetters3 = boardCopy2[6] + boardCopy2[7] + boardCopy2[8] + "";

        var played = false;

        if (rowLetters1 === "OO_") { boardCopy2[2] = "O"; played = true;}
        else if (rowLetters1 === "O_O") { boardCopy2[1] = "O"; played = true;}
        else if (rowLetters1 === "_OO") { boardCopy2[0] = "O"; played = true;}
        else if (rowLetters2 === "OO_") { boardCopy2[5] = "O"; played = true;}
        else if (rowLetters2 === "O_O") { boardCopy2[4] = "O"; played = true;}
        else if (rowLetters2 === "_OO") { boardCopy2[3] = "O"; played = true;}
        else if (rowLetters3 === "OO_") { boardCopy2[8] = "O"; played = true;}
        else if (rowLetters3 === "O_O") { boardCopy2[7] = "O"; played = true;}
        else if (rowLetters3 === "_OO") { boardCopy2[6] = "O"; played = true;}
        
        if (played === true) {
            return boardCopy2;
        }
        else {
            return null;
        }
    }

    const diagonalWin = (aBoardCopy) => {
        var boardCopy3 = [...aBoardCopy];
        const diagLetters1 = boardCopy3[0] + boardCopy3[4] + boardCopy3[8] + "";
        const diagLetters2 = boardCopy3[2] + boardCopy3[4] + boardCopy3[6] + "";

        var played = false;

        if (diagLetters1 === "OO_") { boardCopy3[8] = "O"; played = true;}
        else if (diagLetters1 === "O_O") { boardCopy3[4] = "O"; played = true;}
        else if (diagLetters1 === "_OO") { boardCopy3[0] = "O"; played = true;}
        else if (diagLetters2 === "OO_") { boardCopy3[6] = "O"; played = true;}
        else if (diagLetters2 === "O_O") { boardCopy3[4] = "O"; played = true;}
        else if (diagLetters2 === "_OO") { boardCopy3[2] = "O"; played = true;}

        if (played === true) {
            return boardCopy3;
        }
        else {
            return null;
        }
    }

    const verticalDef = (aBoardCopy) => {
        var boardCopy4 = [...aBoardCopy];
        const columnLetters1 = boardCopy4[0] + boardCopy4[3] + boardCopy4[6] + "";
        const columnLetters2 = boardCopy4[1] + boardCopy4[4] + boardCopy4[7] + "";
        const columnLetters3 = boardCopy4[2] + boardCopy4[5] + boardCopy4[8] + "";

        var played = false;

        if (columnLetters1 === "XX_") { boardCopy4[6] = "O"; played = true;}
        else if (columnLetters1 === "X_X") { boardCopy4[3] = "O"; played = true;}
        else if (columnLetters1 === "_XX") { boardCopy4[0] = "O"; played = true;}
        else if (columnLetters2 === "XX_") { boardCopy4[7] = "O"; played = true;}
        else if (columnLetters2 === "X_X") { boardCopy4[4] = "O"; played = true;}
        else if (columnLetters2 === "_XX") { boardCopy4[1] = "O"; played = true;}
        else if (columnLetters3 === "XX_") { boardCopy4[8] = "O"; played = true;}
        else if (columnLetters3 === "X_X") { boardCopy4[5] = "O"; played = true;}
        else if (columnLetters3 === "_XX") { boardCopy4[2] = "O"; played = true;}
        
        if (played === true) {
            return boardCopy4;
        }
        else {
            return null;
        }
    }

    const horizontalDef = (aBoardCopy) => {
        var boardCopy5 = [...aBoardCopy];
        const rowLetters1 = boardCopy5[0] + boardCopy5[1] + boardCopy5[2] + "";
        const rowLetters2 = boardCopy5[3] + boardCopy5[4] + boardCopy5[5] + "";
        const rowLetters3 = boardCopy5[6] + boardCopy5[7] + boardCopy5[8] + "";

        var played = false;

        if (rowLetters1 === "XX_") { boardCopy5[2] = "O"; played = true;}
        else if (rowLetters1 === "X_X") { boardCopy5[1] = "O"; played = true;}
        else if (rowLetters1 === "_XX") { boardCopy5[0] = "O"; played = true;}
        else if (rowLetters2 === "XX_") { boardCopy5[5] = "O"; played = true;}
        else if (rowLetters2 === "X_X") { boardCopy5[4] = "O"; played = true;}
        else if (rowLetters2 === "_XX") { boardCopy5[3] = "O"; played = true;}
        else if (rowLetters3 === "XX_") { boardCopy5[8] = "O"; played = true;}
        else if (rowLetters3 === "X_X") { boardCopy5[7] = "O"; played = true;}
        else if (rowLetters3 === "_XX") { boardCopy5[6] = "O"; played = true;}
        
        if (played === true) {
            return boardCopy5;
        }
        else {
            return null;
        }
    }

    const diagonalDef = (aBoardCopy) => {
        var boardCopy6 = [...aBoardCopy];
        const diagLetters1 = boardCopy6[0] + boardCopy6[4] + boardCopy6[8] + "";
        const diagLetters2 = boardCopy6[2] + boardCopy6[4] + boardCopy6[6] + "";

        var played = false;

        if (diagLetters1 === "XX_") { boardCopy6[8] = "O"; played = true;}
        else if (diagLetters1 === "X_X") { boardCopy6[4] = "O"; played = true;}
        else if (diagLetters1 === "_XX") { boardCopy6[0] = "O"; played = true;}
        else if (diagLetters2 === "XX_") { boardCopy6[6] = "O"; played = true;}
        else if (diagLetters2 === "X_X") { boardCopy6[4] = "O"; played = true;}
        else if (diagLetters2 === "_XX") { boardCopy6[2] = "O"; played = true;}

        if (played === true) {
            return boardCopy6;
        }
        else {
            return null;
        }
    }

    const specialMoves = (aBoardCopy) => {
        var boardCopy7 = [...aBoardCopy];
        
        if (boardCopy7[2] === "X" && boardCopy7[6] === "X") {
            if (boardCopy7[0] === "_" && boardCopy7[1] === "_" && boardCopy7[3] === "_") {
                boardCopy7[1] = "O";
                return boardCopy7;
            }
        }
        
        if (boardCopy7[4] === "_") {boardCopy7[4] = "O"; return boardCopy7;}
        if (boardCopy7[2] === "_") {boardCopy7[2] = "O"; return boardCopy7;}
        if (boardCopy7[8] === "_") {boardCopy7[8] = "O"; return boardCopy7;}
        if (boardCopy7[6] === "_") {boardCopy7[6] = "O"; return boardCopy7;}
        if (boardCopy7[0] === "_") {boardCopy7[0] = "O"; return boardCopy7;}
   
        return null;
    }

    const restart = () => {
        const boardCopy7 = Array(9).fill("_");
        setBoardArray(boardCopy7);
        setGameCondition("");
    }

    const clearf = () => {
        setWins(0);
        setLosses(0);
        setTies(0);
    }

    const renderBoardbtn = (index) => {
        return (
            <div>
                <button onClick={() => btnClicked(index) } className="pp">{boardArray[index]}</button>
            </div>
        );
    }

    return (
        <div className="board">
            <center>
                <div>
                    <div className="inl">{renderBoardbtn(0)}</div> <div className="inl">{renderBoardbtn(1)}</div> <div className="inl">{renderBoardbtn(2)}</div> <br/>
                    <div className="inl">{renderBoardbtn(3)}</div> <div className="inl">{renderBoardbtn(4)}</div> <div className="inl">{renderBoardbtn(5)}</div> <br/>
                    <div className="inl">{renderBoardbtn(6)}</div> <div className="inl">{renderBoardbtn(7)}</div> <div className="inl">{renderBoardbtn(8)}</div> <br/>
                </div>
            </center>
            <br/><br/>
            <center><h1 id="win">{ gameCondition }</h1></center>
            <br/><br/><br/>
            <Options restart={ restart } clearf={clearf} wins={ wins } losses={ losses } ties={ ties }/>
        </div>
    );
}
export default Board;


