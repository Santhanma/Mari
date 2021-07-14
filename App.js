import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default () => {

  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3005/users");
    setUser(result.data.reverse());
  };
  const[input,setInput] = useState('')
  const[output,setOutput] = useState([])

  
  const[activeChat, setActiveChat] = useState({})
  const [user,setUser1] = useState({
    id:123,
    avatar:"https://www.w3schools.com/w3images/avatar2.png",
    name:'Santhanamari',
  });
  const [showNewChat, setShowNewChat] = useState(false);
  
 
  const handleNewChat = () => {
    setShowNewChat(true);
  }
  useEffect(() => {
    setOutput([])
    users.filter(val=>{
      if(val.name.toLowerCase().includes(input.toLowerCase()))
      {
          setOutput(output=>[...output,val])
      }
    })
  },[input])
  

  return(
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
        users={users}
        user={user}
        show={showNewChat}
        setShow={setShowNewChat}
        
        />
        <header>
          <img className="header-avatar" src={user.avatar} alt=""/>
          <div className="header-buttons">
          <div className="header-btn">
              <MoreVertIcon style={{color:'#919191'}} />
            </div>
            <div onClick={handleNewChat} className="header-btn">
              <ChatIcon style={{color:'#919191'}} />
            </div>
            <div className="header-btn">
                <DonutLargeIcon  style={{color:'#919191'}} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
              <SearchIcon fontSize="small" style={{color:'#919191'}}/>
              <input onChange={e=>setInput(e.target.value)} type="search" placeholder="search here..," />
          </div>
        </div>
        <div classaName="chatlist">
          <div className="chatlist-scroll">
         {output.map((item, key)=>(
           <ChatListItem 
           key={key}
           data={item}
           onClick={() => setActiveChat (users[key])}
           />

         ))}
         </div>
        </div>

      </div>
      <div className="contentarea">
      
        {activeChat.id !== undefined &&       
        <ChatWindow 
        user={user}
        />
        }
        {activeChat.id === undefined &&
        <ChatIntro />
        }

      </div>
    </div>
  );


}
