import React from 'react'
import {Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import {IoPersonCircle } from 'react-icons/io5';
import {ImExit} from 'react-icons/im'

const MainBar = styled.div`
border-style:solid;
border-width: 1px;
border-color:black;`

const List = styled.ul`
 display:flex;
 flex-direction:row;
 margin:0;
 padding:0;
`;

const LI = styled.li`
list-style:none;
`

const Navigation = ({signOutUser}) => {


  const handleSignOut = () => {
    signOutUser()
  }

  return (
    <>
    <MainBar>
      <List>
        <LI>
        <Link style={{ textDecoration: "none" }} to="/">
        <p> Home <FaHome/> </p>
        </Link>
        </LI>
        <LI>
        <Link style={{ textDecoration: "none" }} to="/myprofile">
        <p> MyProfile <IoPersonCircle/> </p>
        </Link>
        </LI>
        <LI>
        <button onClick = {handleSignOut}> SignOut <ImExit/> </button>
        </LI>
      </List>
    </MainBar>
    </>
  )
}

export default Navigation
