import { useEffect, useState } from "react";
import './styles.css';

const Card = ({ isRecordingDone }) => {
  // const [videoHTML, setVideoHTML] = useState("");

  return (
    <div className={`greeting-card ${isRecordingDone ? 'hide' : 'show'}`}>
    	{/*<img id='card' src='https://media4.giphy.com/media/MRGfqDh6IcAf2VvAxA/giphy.gif?cid=ecf05e47gh0cyqlm2hzrhx8nql3dubv2517oi4in3z6g0zem&rid=giphy.gif'/>*/}
      <div id='card'></div>
      <div class='name'>Alice!</div>
		{/*		<iframe src="https://giphy.com/embed/MRGfqDh6IcAf2VvAxA" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/birthday-happy-clipcards-MRGfqDh6IcAf2VvAxA">via GIPHY</a></p>*/}
    </div>
  );
}

export default Card;
