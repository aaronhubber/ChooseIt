import React from 'react'
import {Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import {IoPersonCircle } from 'react-icons/io5';
import {ImExit} from 'react-icons/im'
import logo from "../assets/images/ChooseIt.png";

const MainBar = styled.div`
height:70px;
width:100%;
padding:0;
margin-top:10px;
background-color:white;
`

const List = styled.ul`
 display:flex;
 flex-direction:row;
margin:0;
padding:0;
 justify-content:space-between;

`;


const LeftList = styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-left:10px;
`
const RightList = styled.div`
margin-right:10px;
`

const LI = styled.li`
list-style:none;
font-size:20px;
&:hover{
  color:orange;
};`

const Logo = styled.img`
height:50px;
margin-right:80px;
`

const Navigation = ({signOutUser}) => {


  const handleSignOut = () => {
    signOutUser()
  }

  return (
    <>
    <MainBar>
      <List>
        <LeftList>
        <LI>
        <Link style={{ textDecoration: 'none' }} to="/home">
        <p> Home  &nbsp;  <FaHome/> </p>
        </Link>
        </LI>
        <LI>
        <Link style={{ textDecoration: "none" }} to="/myprofile">
        <p> MyProfile   &nbsp;  <IoPersonCircle/> </p>
        </Link>
        </LI>
        </LeftList>
        <Logo src = {logo}/>
        <RightList>
        <LI>
        <Link onClick = {handleSignOut} style={{ textDecoration: "none" }} to="/home">
        <p> Sign Out &nbsp; &nbsp;<ImExit/> </p>
        </Link>
        </LI>
        </RightList>
      </List>
    </MainBar>
    </>
  )
}

export default Navigation
