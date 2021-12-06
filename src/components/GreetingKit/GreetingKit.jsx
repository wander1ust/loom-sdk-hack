import { useEffect, useState } from "react";
import { Message, Gift } from "../";
import { Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import './styles.css';

const GreetingKit = ({ videoHTML, isRecordingDone }) => {
  const [step, setStep] = useState(1);
  let navigate = useNavigate();

  const handlePreviousClick = (e) => {
    // navigate("/gift-wrap", { replace: true });
    if (step > 1) {
      setStep(step - 1);
    }
  }  
  const handleNextClick = (e) => {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  const renderGreetingComponent = () => {
    switch(step) {
      case 1:
        return videoHTML ? <div id='loom-video' dangerouslySetInnerHTML={{ __html: videoHTML }}></div> : <h3>Video is missing.</h3>
        break;
      case 2:
        return <Gift />
        break;      
      case 3:
        return videoHTML ? <Message id='msg' isRecordingDone={isRecordingDone} videoHTML={videoHTML} /> : <h3>Message is missing.</h3>
        break;
      default: 
    }      
  }


  return (
      <div className={'greeting-kit'}> 
        {renderGreetingComponent()}
        <Button className={'btn'} variant="contained" onClick={handlePreviousClick}>
          Previous
        </Button>
        <Button className={'btn'} variant="contained" onClick={handleNextClick}>
          Next
        </Button>
        {/*<button className={'btn'} onClick={handlePreviousClick}>Previous</button>*/}
        {/*<button className={'btn'} onClick={handleNextClick}>Next</button>        */}
      </div>          
  );
}

        // {/*<iframe src="https://www.loom.com/embed/85924dbbc70e4e89ab95bdf47f515471" style={{width: "100%", height: "100%", marginTop: "-15em"}} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>*/}
        // {console.log(typeof(videoHTML))}
        // {/*{videoHTML ? videoHTML : 'Video is missing.'}*/}
        // {videoHTML ? <div style={videoStyle} dangerouslySetInnerHTML={{ __html: videoHTML }}></div> : <h6>Video is missing.</h6>}
        // <button style={buttonStyle} onClick={handlePreviousClick}>Previous</button>
        // <button style={buttonStyle} onClick={handleNextClick}>Next</button>
        // {step === 2 ? <Gift /> : 'Video'}
        // <Message isRecordingDone={isRecordingDone} videoHTML={videoHTML} />

        // <Router>
        //   <>
        //     <Routes>
        //       <Route exact path="/gift-wrap" element={ <Gift/> } />
        //     </Routes>
        //   </>
        // </Router>

export default GreetingKit;
