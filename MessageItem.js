import React from 'react';
import './static/MessageItem.css';

export default ({data,user}) => {
    return(
        <div 
        className="MessageLine"
        style={{
            justifyContent:user.id == data.author ? 'flex-end' : 'flex-start'
        }}
        >
            <div 
            className="messageItem"
            style={{
            backgroundColor: user.id == data.author ? '#DCF8C6' : '#fff'
        }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">09:30</div>
            </div>
        </div>
    );
}