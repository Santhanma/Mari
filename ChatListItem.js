import React from 'react';
import './static/ChatListItem.css';

export default ({onClick, active, data, user}) => {
    return (
        <div 
        className={'chatListItem'}
        onClick={onClick}
        >
            <div className="chatListItem-avatar" >{data.pat_id} </div>
            <div className="chatListItem-lines">
                <div className="chatList-line">
                    <div className="chatListItem-name">{data.name}</div>
                    <div className="chatListItem-date">{data.time}</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>{data.lastmsg}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}