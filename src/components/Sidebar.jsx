import { Chat, DonutLarge, MoreVert, SearchOffOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__header' >
            <Avatar src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"/>
            <div className="sidebar__headerRight">
              <IconButton>
                <DonutLarge />
              </IconButton>
              <IconButton>
                <Chat />
              </IconButton>
              <IconButton>
                  <MoreVert />
              </IconButton>
            </div>
        </div>

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
          <SearchOffOutlined style={{color:'gray', padding:'10px'}} />
          <input type="text" placeholder='Search or start a new chat' />
          </div>
        </div>
        <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

        </div>
    </div>
  )
}

export default Sidebar