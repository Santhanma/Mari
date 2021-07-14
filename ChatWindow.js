import React, { useState, useEffect , useRef} from 'react';
import ViewDetails from './ViewDetails';
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from '@material-ui/icons/Search';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MessageItem from './MessageItem';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


import './static/ChatWindow.css';


export default ({user,data}) => {
        
        const body = useRef();
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen ] = useState(false);
    const [text, setText ] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        { author:123,body:'Hello'},
        {author:123,body:'How are you '},
        {author:1123,body:'Yaah I am fine you?'},
        { author:123,body:'Hello'},
        {author:123,body:'How are you '},
        {author:1123,body:'Yaah I am fine you?'},
        { author:123,body:'Hello'},
        {author:123,body:'How are you '},
        {author:1123,body:'Yaah I am fine you?'},
        { author:123,body:'Hello'},
        {author:123,body:'How are you '},
        {author:1123,body:'Yaah I am fine you?'},
        {author:123,body:'Yaah I am fine you?'},
    ]);
    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop= body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
            setText( text + emojiObject.emoji);
    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart =() => {
                    setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }
    const handleSentClick = () => {
        
    }
    const [showViewDetails, setShowViewDetails] = useState (false);

    const handleViewDetails = () => {
        setShowViewDetails(true);
    }
    



   
    
 
    
    
  
    


    return(
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src={user.avatar} alt="" />
                    <div className="chatWindow-name">{user.name}</div>
                </div>
                <div className="chatWindow-headerbuttons">
                    <div className="chatWindow-btn">
                    <SearchIcon style={{color:'#919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                    <VisibilityIcon onClick={handleViewDetails} style={{color:'#919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                    <MoreVertIcon style={{color:'#919191'}}/>
                    </div>
                </div>
               
            </div>
            <div ref={body} className="chatWindow-body">
            <ViewDetails 
                    
                    user={user}
                    show={showViewDetails}
                    setShow={setShowViewDetails}            
            />
                {list.map((item, key) => (
                    <MessageItem
                    key={key}
                    data={item}
                    user={user}
                    /> 
                ))}
              
                </div>

                <div className="chatWindow-emojiarea"
                style={{height: emojiOpen ? '200px' : '0px'}}>
                    <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    diableSearchBar
                    disableSkinTonePicker
                    />
                </div>
                <div className="chatWindow-footer">
                    <div className="chatWindow-pre">
                    <div 
                    className="chatWindow-btn"
                    onClick={handleCloseEmoji}
                    style={{width:emojiOpen ? 40:0}}
                    >
                    <CloseIcon  style={{color:'#919191'}}/>
                    </div>
                    <div 
                    className="chatWindow-btn"
                    onClick={handleOpenEmoji}
                    >
                    <EmojiEmotionsIcon  style={{color: emojiOpen ?'#009688' : '#919191'}}/>
                    </div>
                    <div 
                    className="chatWindow-btn"                 
                    >  
                {/*                       
                   <input ref={ register } type='file' name='file' />
                   <AttachFileIcon onClick={handleonClick}   
                    style={{color:'#919191'}}
                                /> */} 
                                <input accept="image/*" id="icon-button-file"
                                    type="file" style={{ display: 'none' }} />
                                    <label htmlFor="icon-button-file">
                                            <AttachFileIcon
                                             style={{color: '#919191'}}/>
                                            </label>
                    
                    </div>
                    </div>
                    <div className="chatWindow-inputarea">
                        <input className="chatWindow-chat" 
                        type="text"
                        placeholder="Type a message.," 
                        value={text}
                        onChange={e=> setText(e.target.value)}
                        />
                    </div>
                    <div className="chatWindow-pos">

                    {text === '' &&
                    <div onClick={handleMicClick}
                    className="chatWindow-btn">
                    < MicIcon  style={{color: listening ? '#126ECE' : '#919191'}}/>
                    </div> 
                        }
                        {text !== '' &&  
                    <div  onClick={handleSentClick}
                    className="chatWindow-btn">
                    <SendIcon  style={{color:'#919191'}}/>
                    </div> 
}
                    </div>
                    </div>
        </div>
    );
}