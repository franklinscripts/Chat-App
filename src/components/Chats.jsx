import React, { useState, useEffect } from 'react'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, Send } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import './Chat.css'
const Chats = () => {
    const [seed, setSeed] = useState('')
    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
    }, [])
    
  return (
    <div className='chat'>
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>last seen at...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
        <p className="chat__message">
                    <span className="chat__name">Nabendu</span>
                    Hello friend
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Parag</span>
                    Hi Nab! I have missed you alot.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Nabendu</span>
                    
                    I know, I know friend it's been a long year
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
        </div>
        <div className="chat__footer">
            <InsertEmoticon />
            <form>
                <input type="text" placeholder='type a message' />
                <button type='submit' ><Send /></button>
            </form>
            <Mic />
        </div>
        
    </div>
  )
}

export default Chats