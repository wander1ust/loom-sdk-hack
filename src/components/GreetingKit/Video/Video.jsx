import { setup, isSupported } from "@loomhq/loom-sdk";
import { oembed } from "@loomhq/loom-embed";
import { useEffect, useState } from "react";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";

const API_KEY = process.env.REACT_APP_LOOM_API_KEY;
const BUTTON_ID = "loom-sdk-button";

const Video = ({ setIsRecordingDone, isRecordingDone, setVideoUrl, videoUrl, setStage, setVideoHTML, videoHTML }) => {
  // const [videoHTML, setVideoHTML] = useState("");
  // const [recordBtnClicked, setRecordBtnClicked] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  // const [recordingState, setRecordingState] = useState('');
  
  let navigate = useNavigate();

  async function setupLoom() {
    const { supported, error } = await isSupported();
    // const { ActiveRecording } = await SDKState;

    if (!supported) {
      console.warn(`Error setting up Loom: ${error}`);
      return;
    }

    const button = document.getElementById(BUTTON_ID);

    if (!button) {
      return;
    }

    const config = {
        bubbleResizable: true   
        // insertButtonText: '';
    }

    const loomRecorder = await setup({
      apiKey: API_KEY
    });

    const { configureButton, status } = loomRecorder;

    const sdkButton = configureButton({ element: button });

    console.log(status());

    sdkButton.on("insert-click", async video => {
      const { html } = await oembed(video.sharedUrl, { width: 600 });
      setVideoUrl(video.sharedUrl);
      setStage('POST_RECORDING');
      setVideoHTML(html);  
      navigate("/assemble-greeting-kit", { replace: true });
      // console.log('videoHTML' + JSON.stringify(html));
      // console.log('videoUrl' + JSON.stringify(html.src));
      // setVideoUrl(html.src);
      // <iframe src=\"https://www.loom.com/embed/529e4aafd2db4a80b7cc50c3ed0ef144\" frameborder=\"0\" width=\"400\" height=\"300\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    });    

    sdkButton.on("recording-start", async video => {
      setIsRecording(true);
    });    

    sdkButton.on("complete", async video => {
      setIsRecording(false);
      setIsRecordingDone(true);
      // setVideo(video);
      console.log('recording complete!');
    });


    

    return loomRecorder;
    // console.log(status.state);

    // () => ({
    //   state: Js(e.getState().recorder.appStage),
    //   success: !0
    // })
  }  

  // click record button on 'R' key press
  var R_KEY = 82;

  const handleKeyDown = (e) => {
      switch( e.keyCode ) {
          case R_KEY:
              console.log('record btn clicked!');
              $(BUTTON_ID).click();
              break;
          default: 
              break;
      }
  }

  const handleBtnClick = () => {
    // setRecordBtnClicked(true);
  }

  useEffect(() => {
    setupLoom();
    // .then(res => {
    //   console.log(JSON.stringify(res));
    // });
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    // setVideoUrl(videoHTML.src);
    // console.log('video html: ' + videoHTML);
    console.log('video url: ' + videoUrl);
  }, [videoUrl]);      
  
  // // useEffect(() => {
  //   setRecordingState(status.state);
  //   console.log(status.state);
  // }, [status.state]);      

  const buttonStyle = {
    fontSize:'1.2em',
    float: 'left',
    position: 'relative',
    display: 'block'
  }
  const hide = {
    display: 'none'
  }  
  const show = {
    display: 'block'
  }
  const videoStyle = {
    marginTop: '-13em'
  }  
  // const whiteText = {
  //   color: #eee;
  // }
  
  const showComponent = isRecordingDone ? 'show' : 'hide';

  // const useNavigateToView = (e) => {
  //   console.log('useNavigateToView called!');
  //   navigate("/present", { replace: true });    
  // }  

  return (
    <>
      <button id={BUTTON_ID} style={Object.assign({}, buttonStyle/*, (isRecording || isRecordingDone) ? hide : show*/)} /*onClick={useNavigateToView}*/>Record</button>
    {/*  <h3 style={{color: '#eee', marginTop: '-7em', paddingBottom: '5em'}}>Loom Greeting Video Maker</h3>*/}
      
 {/*     <iframe src="https://www.loom.com/embed/85924dbbc70e4e89ab95bdf47f515471" style={{width: "100%", height: "100%"}} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>*/}

      <div style={videoStyle} dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
      {/*<p>{status.state}</p>*/}
    </>
  );
}

export default Video;