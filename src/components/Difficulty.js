import React, { useState } from "react";
import { Slider} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({
    overrides:{
      MuiSlider: {
        root:{
            height: 8,
        },
        thumb:{
            color: "yellow",
            height: 16,
            width: 16,
            marginTop: -12,
            marginLeft: -12,
        },
        track: {
            color: 'red',
            marginTop: -8,
            height: 8,
        },
        rail: {
            color: 'black',
            marginTop: -8,
            height: 8,
        }
      }
  }
  });

export default function Difficulty() {
    const [value, setValue] = useState([2])

    const updateValue=(e,data)=>{
        setValue(data)
        console.log(data)
        
    }

    return (
        <>
            <center><div className="slidertitle">DIFFICULTY LEVEL</div></center>
            <center><ThemeProvider theme={muiTheme}><Slider className="theSlider" 
                value={value}
                onChange={updateValue}
                min={1}
                max={3}
                step={1}
            /></ThemeProvider></center>
            <center><div className="sliderlabels">
                <p>EASY</p> <p>MEDIUM</p> <p>HARD</p>
            </div></center>
            <br/><br/><br/>
        </>
    );
}
