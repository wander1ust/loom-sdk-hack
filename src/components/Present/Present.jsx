import { useEffect, useState } from "react";
import $ from 'jquery';
import './styles.css';

const Present = () => {
  
  const openPresent = () => {
    $('.open').on('click', function (e) {
      e.preventDefault();
      $('.present').toggleClass('is-open');
      var $this = $(this);
      if ($this.text() === "Open")
        $this.text("Close");
      else
        $this.text("Open");
    });  
  }

  const message = 'Happy birthday, Alice!';

  useEffect(() => {
    openPresent();
  }, [])

  return (
    <>
          {/*<p>{message}</p>*/}
      <div class="present">
        <div class="lid">
          <div class="lid-top"></div>
          <div class="lid-sides"></div>
        </div>
        <div class="present-inner"></div>
        <div class="prize">
          <div class="starburst"></div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.svmcards.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDunkin-Donuts.png" width="200px" alt />
        </div>
      </div>

      <button class="open">Open</button>

    </>
  );
}

export default Present;
