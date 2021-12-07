import { React, useEffect, useState } from "react";
import { setup, isSupported } from "@loomhq/loom-sdk";
import { oembed } from "@loomhq/loom-embed";
import { Video, GreetingCard, Present, Message, Gift, GreetingKit } from "./components";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

function App() {
  const [isRecordingDone, setIsRecordingDone] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoHTML, setVideoHTML] = useState(null);
  const [stage, setStage] = useState('PRE_RECORDING');

  const useNavigateToView = () => {
    let navigate = useNavigate();
    console.log('useNavigateToView called!');
    navigate("/present", { replace: true });
    // switch(stage) {
    //   case 'POST_RECORDING':
    //     navigate("/present", { replace: true });
    //     break;
    //   case 'PRE_RECORDING':
    //     break;
    //   default: 
    // }      
  }

  useEffect(() => {
    console.log('videoUrl' + JSON.stringify(videoUrl));
    setStage('POST_RECORDING');
    console.log(stage);
  }, [videoUrl])  

  // useEffect(() => {
   
  // }, [stage])

  // hide or show class if condition is true
  const hideWhenRecordingComplete = isRecordingDone ? 'hide' : 'show';
  const showWhenRecordingComplete = isRecordingDone ? 'show' : 'hide';

  return (         
    <Router>
    <> 
      <Routes>
        {/*{useNavigateToView()}*/}
   {/*     <Route 
          render={
            stage === 'pre-recording'  ?
              <Navigate to='/present' replace={true} /> 
              :
              <Navigate to='/present' replace={true} />
        } 
        />*/}
        <Route exact path="/present" element={ <Present/> } />
        <Route exact path="/" element={
          <> 
            <GreetingCard isRecordingDone={isRecordingDone} videoHTML={videoHTML} /*className={hideWhenRecordingComplete}*/ /> 
            <Video setIsRecordingDone={setIsRecordingDone} isRecordingDone={isRecordingDone} setVideoUrl={setVideoUrl} setVideoHTML={setVideoHTML} videoHTML={videoHTML} videoUrl={videoUrl} onClick={useNavigateToView} setStage={setStage} /> 
            {<Message isRecordingDone={isRecordingDone} /*className={showWhenRecordingComplete}*/ videoUrl={videoUrl} />}
          </> 
        } />
      <Route exact path="/assemble-greeting-kit" element={
          <GreetingKit videoHTML={videoHTML} videoUrl={videoUrl} isRecordingDone={isRecordingDone} />        
        } />
      </Routes> 
      </>   
    </Router>    
  );
}

export default App;