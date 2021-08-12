import React from 'react'
import styled from "styled-components"
import { Avatar, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator";
import { auth } from "../firebase"

export default function Sidebar() {

    const createChat = () => {
        const input = prompt(
            "Please enter an email address for the user you wish to chat with"
            );
        
        if(!input) return null;

        if(EmailValidator.validate(input)) {
            
        }

    }

    return (
        <Container>
            <Header>
                <UserAvatar onClick={()=> {auth.signOut()}}/>
                <IconContainer>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </IconContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats"/>
            </Search>

            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
            {/* List of chats */}
        </Container>
    )
}

const Container = styled.div`
   
`;

const Header = styled.div`
       display: flex;
       position: sticky;
       top: 0;
       background-color: white;
       z-index: 100;
       justify-content: space-between;
       align-items: center;
       padding: 15px;
       height: 80px;
       border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`

    cursor: pointer;
    :hover { 
        opacity: 0.8;
    }

`;

const IconContainer = styled.div`

`;

const Search = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    flex: 1;
    outline-width: 0;
    border: none;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;


