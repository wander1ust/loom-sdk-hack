import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsCaretLeftSquareFill, BsFillCaretRightSquareFill } from "react-icons/bs";
import './styles.css';

/* TODO: add flip card (turn page) animation
   FIX: Adjust for variable image sizes. Fix positioning.
   FIX: page index - allow 2-page cards; image duplicated as temp hack
*/ 
const Card = ({ isRecordingDone, theme, customCardBtnClicked }) => {
  const DEFAULT_WIDTH = 500;
  const [coverImage, setCoverImage] = useState("");
  const [cardWidth, setCardWidth] = useState(DEFAULT_WIDTH);
  const [pageNumber, setPageNumber] = useState("");
  const [pageOne, setPageOne] = useState("");
  const [pageTwo, setPageTwo] = useState("");
  const [hasCoverOnly, setHasCoverOnly] = useState(true);

  const getCurrentPageImage = () => {
    switch( !hasCoverOnly && pageNumber ) {
      case 0:              
          return coverImage;
          break;    
      case 1:              
          return pageOne;
          break;    
      case 2:              
          return pageTwo;
          break;
      default:
          return coverImage;
          break; 
    }      
  }  

  const bgImg = {
    backgroundImage: `url(${getCurrentPageImage()})`,
    width: cardWidth + 'px'
  } 

  const renderGreetingCard = () => {
      switch( theme ) {
          case 'congrats':              
          setHasCoverOnly(false);
              setCoverImage('https://media.giphy.com/media/9DnPN3BeOMdXzp8isT/giphy.gif');              
              setPageOne('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.cdn1.stockunlimited.net%2Fpreview1300%2Fcongratulations-on-your-job-promotion_1828635.jpg&f=1&nofb=1')
              setPageTwo('https://media.giphy.com/media/IbOiFIJcSlHW2rgVUa/giphy.gif')
              setCardWidth(DEFAULT_WIDTH);
              break;            
          case 'congrats-2':   
              setHasCoverOnly(false);           
              setCoverImage('https://media.giphy.com/media/1O1UUSESiuGSi1VdT6/giphy.gif');
              setPageOne('https://media.giphy.com/media/obN7DdnUWxuyqz5qZS/giphy.gif')
              setPageTwo('https://media.giphy.com/media/1zR9J5dTgP0ssiJY1g/giphy.gif')
              setCardWidth(680);
              break;                       
          case 'congrats-3':   
              setCoverImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6d%2F83%2F06%2F6d830607add8cf4e4d62621eced0b886.gif&f=1&nofb=1');              
              setCardWidth(800);
              break;             
          case 'bday':              
              setCoverImage('https://media4.giphy.com/media/MRGfqDh6IcAf2VvAxA/giphy.gif?cid=ecf05e47gh0cyqlm2hzrhx8nql3dubv2517oi4in3z6g0zem&rid=giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              break;          
          case 'get-well-soon':     
              setHasCoverOnly(false);            
              setCoverImage('https://media1.giphy.com/media/ddnwBn4MDR0fxmARdC/giphy.gif?cid=ecf05e47ekkzese0ayrcpwco3j9befn9osvwp7t90gvkcvi1&rid=giphy.gif&ct=g');
              setPageOne('https://media.giphy.com/media/3tJdnnFYYpKbbf8VD3/giphy.gif');
              setPageTwo('https://media.giphy.com/media/3tJdnnFYYpKbbf8VD3/giphy.gif');
              // pageNumber === 1 ? setCardWidth(700) : setCardWidth(DEFAULT_WIDTH);
              setCardWidth(DEFAULT_WIDTH);
              break;           
          case 'get-well-soon-2':     
              setHasCoverOnly(false);            
              setCoverImage('https://media.giphy.com/media/ck8eBBy3Y5ADRNWQwa/giphy.gif');
              setPageOne('https://media.giphy.com/media/eH4O6F2Drxa8SE5hor/giphy.gif');
              setPageTwo('https://media.giphy.com/media/KNfjL3VjWDurS/giphy.gif');
              // pageNumber === 1 ? setCardWidth(700) : setCardWidth(DEFAULT_WIDTH);
              setCardWidth(760);
              break;          
          case 'appreciation':              
              setCoverImage('https://media2.giphy.com/media/Em4DShwFpRSJ63Nj5V/giphy.gif?cid=ecf05e47ialed5124c2obr3h8uhikmdvakjtyzqw87iu0b0r&rid=giphy.gif&ct=g');
              setCardWidth(DEFAULT_WIDTH);
              break;          
          case 'xmas':              
              setCoverImage('https://media.giphy.com/media/euviDNZfscxPOVSkHa/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              // https://media.giphy.com/media/3o6fJdYXEvMa5ZmlI4/giphy.gif
              break;          
          case 'new-year':              
              setCoverImage('https://media.giphy.com/media/xUOxf23OGRF34s5Og0/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              break;          
          case 'holidays':              
              setCoverImage('https://media.giphy.com/media/yIc4TN9rLa7Re/giphy.gif');
              // https://media.giphy.com/media/mywy4SfbfOXc10zvZz/giphy.gif
              setCardWidth(670);      
              break;                  
          case 'miss-you':              
              setCoverImage('https://media.giphy.com/media/lmogXxKKdTXUpZjaMp/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              break;          
          case 'thinking-of-you':              
              setCoverImage('https://media.giphy.com/media/ODQavyzOydUEU/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              break;          
          case 'thinking-of-you-2':              
              setCoverImage('https://media.giphy.com/media/kDT3XwH2JinifnRybI/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              break;          
          case 'thinking-of-you-3':              
              setCoverImage('https://media.giphy.com/media/3oFzme8Mt2dGgNLCjS/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              // https://media.giphy.com/media/3oFzme8Mt2dGgNLCjS/giphy.gif
          break;              
          case 'thinking-of-you-4':              
              setCoverImage('https://media.giphy.com/media/N0wPrpPdvASA0/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
            // https://media.giphy.com/media/3oFzme8Mt2dGgNLCjS/giphy.gif
          break;              
          case 'thinking-of-you-5':              
              setCoverImage('https://media3.giphy.com/media/ejJY6Jn478cQcsDS5m/giphy.gif?cid=ecf05e47xxn9fsxiy0rpjup6v8nh4o9kyjg5ezk5cwgbvbfv&rid=giphy.gif&ct=g');
              setCardWidth(DEFAULT_WIDTH);
          // https://media.giphy.com/media/3oFzme8Mt2dGgNLCjS/giphy.gif
          break;          
          case 'apology':              
              setCoverImage('https://media.giphy.com/media/d7fTn7iSd2ivS/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
          // https://media.giphy.com/media/3oFzme8Mt2dGgNLCjS/giphy.gif
          break;          
          case 'farewell-1':              
          setHasCoverOnly(false);
              setCoverImage('https://media.giphy.com/media/d61upAxy3hr4ztM9YJ/giphy.gif');
              setPageOne('https://media.giphy.com/media/ctSPdirxOQIadtbZlB/giphy.gif');
              setPageTwo('https://media.giphy.com/media/v7berPj2xaz1Xvr3yM/giphy.gif');
              setCardWidth('700');          
          case 'farewell-2':              
          setHasCoverOnly(false);
              setCoverImage('https://media.giphy.com/media/d61upAxy3hr4ztM9YJ/giphy.gif');
              setPageOne('https://i.pinimg.com/originals/c2/66/f4/c266f4115e8a47f00e118101377004d6.png');
              setPageTwo('https://media.giphy.com/media/FSR4F54XaEDvLp5iAE/giphy.gif');
              setCardWidth('700');
          break;          
          case 'company-anniversary':              
              setCoverImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wishesmsg.com%2Fwp-content%2Fuploads%2FWork-Anniversary-Wishes-For-Employee.jpg&f=1&nofb=1');
              setCardWidth(700);
          break;          
          case 'humor':              
              setCoverImage('https://media.giphy.com/media/2oWWe3cwQE0snrfBz1/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
          break;          
          case 'love':              
              setCoverImage('https://media.giphy.com/media/SPe79hbsl22IzyQgGQ/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
          break;
          default: 
              setCoverImage('https://media.giphy.com/media/SPe79hbsl22IzyQgGQ/giphy.gif');
              setCardWidth(DEFAULT_WIDTH);
              break;
      }        
  }

  const handlePreviousPageClick = (e) => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
      console.log(pageNumber - 1)
    }
  }  
  const handleNextPageClick = (e) => {
    if (pageNumber < 2) {
      setPageNumber(pageNumber + 1);
      console.log(pageNumber + 1)
    }
  }

  useEffect(() => {    
    // setCardWidth(DEFAULT_WIDTH);
    setHasCoverOnly(true);
    renderGreetingCard();
    setPageNumber(0);
  }, [theme])  

  // TODO: Fix bug/hack
  useEffect(() => {    
    if (customCardBtnClicked) {
      setCardWidth(DEFAULT_WIDTH);
      setCoverImage('https://media.giphy.com/media/2oWWe3cwQE0snrfBz1/giphy.gif');
    }
  }, [customCardBtnClicked])

  return (
    <div className={`greeting-card ${isRecordingDone ? 'hide' : 'show'}`}>
      <div id='card' style={bgImg}></div>
      <BsCaretLeftSquareFill className='caret-icon' onClick={handlePreviousPageClick}/>
      <BsFillCaretRightSquareFill className='caret-icon' onClick={handleNextPageClick}/>      
    </div>
  );
}

export default Card;
