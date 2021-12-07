import { useEffect, useState, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import './styles.css';

const Gift = ({ isRecordingDone, setStep, step, setGiftImageUrl, setGiftCardAmount }) => {
  // const [giftImageUrl, setGiftImageUrl] = useState("");
  // const [giftCardAmount, setGiftCardAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const showDisclaimer = () => {
    return <h6 id='disclaimer'>* DISCLAIMER: All company names, logos, and gift card and gift images are trademarks&#8482; or registered&#174; trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them. All third party trademarks (including logos and icons) referenced in this project remain the property of their respective owners. </h6>
  }
  const listTMsandImgSource = () => {
    return <div id='credit'>
          <span className={'tm'}>Dunkin' &#8482;</span> <br/>
          <a href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.svmcards.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDunkin-Donuts-1.png'>Image Source</a><div class='spacing-top'></div>

          <span className={'tm'}>Starbucks &#8482;</span> <br/>
          <a href='https://freepngimg.com/brands/starbucks'>Image Source</a>     <div class='spacing-top'></div> 

            <span className={'tm'}>Amazon &#8482;</span> <br/>
          <a href='https://www.pngmart.com/files/10/Amazon-Gift-Card-PNG-File.png'>Image Source</a><div class='spacing-top'></div>

                  <span className={'tm'}>Target &#8482;</span> <br/>
          <a href='https://www.svmcards.com/buy-target-gift-card'>Image Source</a> <div class='spacing-top'></div>

               <span className={'tm'}>Groupon &#8482;</span> <br/>
          <a href='https://cdn.freebiesupply.com/images/large/2x/groupon-logo-transparent.png'>Image Source</a><div class='spacing-top'></div>

                  <span className={'tm'}>FreshDirect &#8482;</span> <br/>
          <a href='https://static1.squarespace.com/static/58e7bc54ebbd1a4ffd8ad781/t/59bfd14fbce1769be9e916de/1505743522213/FreshDirect.png'>Image Source</a><div class='spacing-top'></div>

                <span className={'tm'}>GrubHub &#8482;</span> <br/>
          <a href='https://fiftyonecc.com/home/grubhub-logo-white/'>Image Source</a><div class='spacing-top'></div>

          <span className={'tm'}>Apple &#8482;</span> <br/>
          <a href='https://support.apple.com/en-us/HT204199'>Image Source</a>
           </div>    
  }
  
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };  
  const handleSave = (e) => {
    e.preventDefault();
    const formElmts = e.currentTarget.elements;  
    console.log(valueRef.current.value);  
    setGiftCardAmount(valueRef.current.value);
    setStep(step + 1);
  };
  const valueRef = useRef('');

  const showDialog = () => {
    return  (     
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Gift Details</DialogTitle>
          <DialogContent>
   {/*         <DialogContentText>
            </DialogContentText>*/}
            <TextField
            inputRef={valueRef}
            autoFocus
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            placeholder="10"
            fullWidth
            variant="standard"
          />                
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
          )
  }

  const handleOnClick = (e) => {
    showDialog();
    setOpen(true)
    setGiftImageUrl(e.currentTarget.getAttribute('src'));
    // console.log(e.currentTarget.getAttribute('src'));
  }
  return (
    <div className={`gift`}>
    {showDialog()}
    {listTMsandImgSource()}
      <div id='gift'></div>
      <div class='title'>Wrap A Gift!</div>
      <Grid className={'gift-gallery'} container justify="center" spacing={4}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.svmcards.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDunkin-Donuts-1.png' width='150px' onClick={handleOnClick} />
{/*          <span className={'tm'}>Dunkin' &#8482;</span> <br/>
          <a href='https://loom.com'>Image Source</a>*/}
        </Grid>
        <Grid item xs={4}>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fstarbucks%2F66353-and-gift-discounts-starbucks-allowances-card-voucher.png' width='165px' style={{marginTop: '1.4em'}} onClick={handleOnClick} onClick={handleOnClick} />
{/*          <span className={'tm'}>Starbucks &#8482;</span> <br/>
          <a href='https://loom.com'>Image Source</a>*/}
        </Grid>
        <Grid item xs={4}>
          <img src='https://www.pngmart.com/files/10/Amazon-Gift-Card-PNG-File.png' width='150px' height='100px' style={{border: '1px solid gray', borderRadius:'0.2em'}} onClick={handleOnClick} />
        {/*  <span className={'tm'}>Amazon &#8482;</span> <br/>
          <a href='https://www.svmcards.com/buy-target-gift-card'>Image Source</a>*/}
        </Grid>
        <Grid item xs={4}>
          <img src='https://www.svmcards.com/wp-content/uploads/2018/03/Target-1.png' width='150px' onClick={handleOnClick}/>
  {/*        <span className={'tm'}>Target &#8482;</span> <br/>
          <a href='https://www.svmcards.com/buy-target-gift-card'>Image Source</a>*/}
        </Grid>        
        <Grid item xs={4}>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Ffreebiesupply%2Flarge%2F2x%2Fgroupon-logo-transparent.png' width='150px' style={{border: '1px solid gray', borderRadius:'0.2em', padding:'2em', background:'#eee'}} onClick={handleOnClick}/>
     {/*     <span className={'tm'}>Groupon &#8482;</span> <br/>
          <a href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ogplanet.com%2Fwp-content%2Fuploads%2F2020%2F02%2FFree-AirBNB-Gift-Cards-219x300.png&f=1&nofb=1'>Image Source</a>*/}
        </Grid>        
        <Grid item xs={4}>
          <img src='https://static1.squarespace.com/static/58e7bc54ebbd1a4ffd8ad781/t/59bfd14fbce1769be9e916de/1505743522213/FreshDirect.png' width='150px' height='90px' style={{border: '1px solid gray', borderRadius:'0.2em', padding:'2em', background:'#eee'}} onClick={handleOnClick}/>
  {/*        <span className={'tm'}>FreshDirect &#8482;</span> <br/>
          <a href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ogplanet.com%2Fwp-content%2Fuploads%2F2020%2F02%2FFree-AirBNB-Gift-Cards-219x300.png&f=1&nofb=1'>Image Source</a>*/}
        </Grid>        
        <Grid item xs={4}>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiftyonecc.com%2Fwp-content%2Fuploads%2F2020%2F10%2FGrubhub-logo-White.png&f=1&nofb=1' width='150px' style={{border: '1px solid gray', borderRadius:'0.2em', padding:'2em', background:'red'}} onClick={handleOnClick}/>
    {/*      <span className={'tm'}>GrubHub &#8482;</span> <br/>
          <a href='https://fiftyonecc.com/home/grubhub-logo-white/'>Image Source</a>*/}
        </Grid>      
      </Grid>

      <Grid item xs={4}>
          <img id='apple-giftcard' src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/itunes-giftcard-single.png' width='160px' onClick={handleOnClick}/>
          {/*<span className={'tm'}>Apple &#8482;</span> <br/>
          <a href='https://support.apple.com/en-us/HT204199'>Image Source</a>*/}
        </Grid>      

      </Grid>
      {showDisclaimer()}
{/*https://banner.uclipart.com/20200112/ii/christmas-gift.png*/}
    </div>
  );
}

export default Gift;
