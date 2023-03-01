import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
const SidebarChat = () => {

    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random) * 5000);

    }, [])

  return (
    <div className='sidebarChat'>
        <Avatar src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'/>
        <div className="sidebarChat__info">
            <h2>Room</h2>
            <p>Last messages...</p>
        </div>
        
    </div>
  )
}

export default SidebarChat