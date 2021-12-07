import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
// import { Typography, Box } from "@material-ui/core";
import './styles.css';

// Generate & add unique gift URL
const Message = ({ videoUrl, giftImageUrl, giftCardAmount }) => {
  const [recipient, setRecipient] = useState({});
  const [sender, setSender] = useState({});
  const [greeting, setGreeting] = useState('Get Well Soon'); // hardcoded - temp hack

  const handleRecipientNameChange = (e) => {
    setRecipient({...recipient, name: e.target.value});
  }
  const handleRecipientEmailChange = (e) => {
    setRecipient({...recipient, email: e.target.value});
  }  
  const handleSenderNameChange = (e) => {
    setSender({...sender, name: e.target.value});
  }
  const handleSenderEmailChange = (e) => {
    setSender({...sender, email: e.target.value});
  }

  return (
    <div className={`message`}>
        <h3 id='msg-title'>Add a Personal Message</h3>
        <TextField
          focused
          margin="dense"
          id="sender-email"
          label="Your Email"
          type="email"
          placeholder="sender@domain.com"
          fullWidth
          variant="filled"
          color="secondary"
          onChange={handleSenderEmailChange}
        />          
        <TextField
          focused
          margin="dense"
          id="recipient-email"
          label="Recipient's Email"
          type="email"
          placeholder="recipient@domain.com"
          fullWidth
          variant="standard"
          onChange={handleRecipientEmailChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="sender-name"
          label="From"
          type="text"
          placeholder="Lauren"
          halfWidth
          variant="standard"
          onChange={handleSenderNameChange}
        />
        <span class="spacing-left"></span>
        <TextField
          autoFocus
          margin="dense"
          id="recipient-name"
          label="To"
          type="text"
          placeholder="Alice"
          halfWidth
          variant="standard"
          onChange={handleRecipientNameChange}
        />
        <div class='spacing-top'></div>
        <TextField
          id="outlined-multiline-static"
          label="Subject"
          multiline
          rows={1}
          fullWidth
          value={`A special message${sender.name ? ` from ${sender.name}` : ''}!`}
        /> 

        <div class='spacing-top'></div>

      {/* message is temporarily hardcoded - change value to defaultValue */}
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={10}
          fullWidth
          // defaultValue=
          value={
            `${greeting}${recipient.name  ? `, ${recipient.name}` : ''}!
  ${videoUrl ? videoUrl : ''}
Please accept my Loom Greeting Kit! 😊

Your Gift URL: %{UNIQUE_GIFT_URL}%
Gift Card Amount: ${giftCardAmount}

${sender.name  ? `- ${sender.name}` : ''}

Want to say thank you? Send a Loom video response or add a comment!
  `
          }
        /> 
    </div>
  );
}
// Gift Image URL: ${giftImageUrl}

export default Message;
