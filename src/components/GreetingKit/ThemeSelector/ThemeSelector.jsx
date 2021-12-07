import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

// import './styles.css';

const ThemeSelector = ({ setTheme, setPageNumber, setCustomCardBtnClicked }) => {
  // const [theme, setTheme] = useState("");

  const themes = [
    'Congratulations',
    'Get Well Soon',
    'Christmas',
    'Birthday',
    'Appreciation',
    'Farewell',
    'Company Anniversary',    
  ];  

  const style = {
    marginLeft: '6em',
    marginTop: '18em',
    color: '#fff',
    fontWeight: 600
    // position: 'relative'
  }

  const handleChange = (e) => {
    setTheme(e.target.value);  
    setCustomCardBtnClicked(false);     
  }  

  const handleCustomCardBtnClick = (e) => {
    setCustomCardBtnClicked(true);    
  }

  return (
    <>
    <div className={'theme-selector'} style={style}>
      <label for="theme">Choose a greeting card:</label> <br/>
      <div style={{paddingBottom:'0.5em'}}></div>
      <select name="theme" id="theme" onChange={handleChange} /*form="themeform"*/>
        <option value="congrats">Congratulations</option>
        <option value="congrats-2">Congratulations II</option>
        <option value="congrats-3">Congratulations III</option>
        <option value="appreciation">Thank You</option>
        <option value="xmas">Merry Christmas</option>
        <option value="bday">Birthday</option>
        <option value="farewell-1">Farewell</option>
        <option value="farewell-2">Farewell - Retirement</option>
        <option value="company-anniversary">Company Anniversary</option>
        <option value="get-well-soon">Get Well Soon</option>
        <option value="get-well-soon-2">Get Well Soon II</option>
        <option value="apology">Sorry</option>
        <option value="miss-you">Miss You</option>
        <option value="thinking-of-you">Thinking of You</option>
        <option value="thinking-of-you-2">Thinking of You II</option>
        <option value="thinking-of-you-3">Thinking of You III</option>
        <option value="thinking-of-you-4">Thinking of You IV</option>
        <option value="thinking-of-you-5">Thinking of You V</option>
        <option value="new-year">Happy New Year</option>
        <option value="holidays">Happy Holidays</option>
        <option value="love" selected>Sending Love</option>
        <option value="humor">Funny</option>
      </select>       
    </div>
    <div id='custom-card' style={{marginTop:'2em'}}>
    <span style={style}>Coming soon...</span>
      <button style={{fontSize:'1em', width: '12em'}} onClick={handleCustomCardBtnClick}>Create A Custom Greeting Card</button>
      </div>
    </>
  );
}

// https://media1.giphy.com/media/ddnwBn4MDR0fxmARdC/giphy.gif?cid=ecf05e47ekkzese0ayrcpwco3j9befn9osvwp7t90gvkcvi1&rid=giphy.gif&ct=g

export default ThemeSelector;
