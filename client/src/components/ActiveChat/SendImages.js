import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { TextField, makeStyles, FilledInput } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';


function SendImages({otherUser, conversationId, user, postMessage}) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [attachments, setAttachments] = useState([]);

    const useStyles = makeStyles({
        dialogBoxTitle:{
            paddingTop:"10px",
            padding:"0px",
            alignSelf:"center"
        },
        attachmentBtn:{
            border:'0px'
        },
        dialogImages:{
            minheight:'500px',
            width:'500px',
            padding:"0px",
            alignItems:'center'
        },
        image:{
            height:'200px',
            width:'150px',
            margin:'30px',
            marginLeft:'50px',
            borderRadius:'5px'
        },
        addImagesBtn:{
            marginTop:'8%',
            marginLeft:'35%',
            marginBottom:'8%',
            width:"30%",
        },
        imageSelector:{
            display:"none"
        },
        inputField:{
            height: 70,
            width:'100%',
            backgroundColor: '#F4F6FA',
            borderRadius: 8,
            marginBottom: 10,
        }
    });

    const uploadImages = async (e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0] );
        data.append('upload_preset', 'messengerImages');
        const res = await fetch("https://api.cloudinary.com/v1_1/diptltbl5/image/upload",
        {
            method:'POST',
            body:data
        });
        const file = await res.json()
            setAttachments((prev)=>{return [...prev, file.secure_url]});
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAttachments([]);
        setText("");
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };
    
    const handleSubmit = async (event) =>{
        const reqBody = {
            text: text,
            conversationId,
            recipientId: otherUser.id,
            sender: conversationId ? null : user,
            attachments: attachments,
        };
        handleClose();
        await postMessage(reqBody);
      };
    
      const classes = useStyles();

  return (  
    <div>
        <Button variant="outlined" className={classes.attachmentBtn} onClick={handleClickOpen}>
            <ContentCopyIcon />
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title">
            <DialogTitle 
                className={classes.dialogBoxTitle} 
                id="responsive-dialog-title">
                {"Select Images to send"}
            </DialogTitle>
            <DialogContent 
                className={classes.dialogImages}>
                {   attachments.length > 0 ? 
                        ( attachments.map((image, key)=>{
                         return (<img key={key} alt="loading img" className={classes.image} src={image}></img>)})
                        ) : ""
                }
            </DialogContent>
            <Button 
                size="large" 
                variant="contained" 
                className={classes.addImagesBtn}>
                <label htmlFor="addImages">
                    Click Here to select Images
                </label>
            </Button>
            <DialogActions>
                <TextField 
                    type='file' id="addImages"
                    placeholder='upload' onChange={uploadImages} 
                    className={classes.imageSelector} />
                <FilledInput
                    disableUnderline
                    placeholder="Type something..." 
                    onChange={handleChange} 
                    value ={text}
                    id="outlined-name" 
                    className={classes.inputField} />
                <Button onClick={handleSubmit} autoFocus>
                   <SendIcon />
                   
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default SendImages