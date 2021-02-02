import React from "react";


const Options = ({ restart, clearf, wins, losses, ties }) => {

    const restartGame = () => {
        restart();
    }

    const clearScore = () => {
        clearf();
    }

    return (
            <div className="options">
                <button id="again"  onClick={restartGame} className="optionsbtn">PLAY AGAIN</button>

                <div className="scorebox">
                    <div className="scoreword">SCORE</div><br/>
                    <div id="score" className="score">{wins}-{losses}-{ties}</div>
                </div>
                <button id="clear"  onClick={clearScore} className="optionsbtn">CLEAR SCORE</button>
            </div>
        );
    }

export default Options;