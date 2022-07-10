import React from 'react'
import {Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import {IoPersonCircle } from 'react-icons/io5';
import {ImExit} from 'react-icons/im'

const MainBar = styled.div`
border-style:solid;
border-width: 1px;
border-color:black
position:absolute;`

const List = styled.ul`
 list-style:none;
 margin:0;
 padding:0;
`;

const SideBar = () => {

  return (
    <>
    <MainBar>
      <List>
        <li>
        <Link style={{ textDecoration: "none" }} to="/">
        <h2> Home <FaHome/> </h2>
        </Link>
        </li>
        <li>
        <Link style={{ textDecoration: "none" }} to="/">
        <h2> MyProfile <IoPersonCircle/> </h2>
        </Link>
        </li>
        <li>
        <Link style={{ textDecoration: "none" }} to="/">
        <h2> SignOut <ImExit/> </h2>
        </Link>
        </li>
      </List>
    </MainBar>
    </>
  )
}

export default SideBar
