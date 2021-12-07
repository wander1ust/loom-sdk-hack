import { useEffect, useState } from "react";
import $ from 'jquery';
import './styles.css';

const Present = ({ giftCardAmount, giftImageUrl }) => {
  const [isBoxOpen, setIsBoxOpen] = useState({});  
  
  const openPresent = () => {
    $('.open').on('click', function (e) {
      e.preventDefault();
      $('.present').toggleClass('is-open');
      var $this = $(this);
      if ($this.text() === "Open") {
        setIsBoxOpen(true);
        $this.text("Close");
      } else {
        setIsBoxOpen(false);
        $this.text("Open");
      }
    });  
  }

  const message = 'Happy birthday, Alice!';

  // const handleOnClick = (e) => {
  //   console.log(e.current.text);
  //   setIsBoxOpen(e.target.value === 'Open');
  // }

  useEffect(() => {
    openPresent();
  }, [])

  return (
    <>
          {/*<p>{message}</p>*/}         
      <div className="present">
        <div className="lid">
          <div className="lid-top"></div>
          <div className="lid-sides"></div>
        </div>
        <div className="present-inner"></div>
        <div className="prize">          
          <div className="starburst"></div>          
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.svmcards.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDunkin-Donuts-1.png" width="200px" alt />
        </div>
      </div>
       <h2 id='gift-amount' className={isBoxOpen ? 'show' : 'hide'}>GIFT $150</h2>
      <button className="open" /*onClick={handleOnClick}*/>Open</button>

    </>
  );
}

export default Present;
