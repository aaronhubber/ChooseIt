import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MyProfileContainer from '../containers/MyProfileContainer';

const ProfileTile = styled.div`
border-style:solid;
border-width:2px;
border-color:grey;
padding: 2%;
margin:2%;
background-color:white ;
&:hover{
    transform:scale(1.1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
height:20em;
`

const ProfilePic = styled.img`
border-style:solid;
border-width:2px;
border-color:grey;
width: 15vw;
`
const ProfileName = styled.h2`
font-family:Arial, Helvetica, sans-serif;
text-align:center;
`


const UserProfile = ({profile , selectProfile}) => {

  const navigate = useNavigate();

let byteSource = "data:" + profile.contentType + ";base64," + profile.profilepicture.picture

const handleProfileSelect = () => {
  selectProfile(profile);
};

const handleMyProfile = () => {
  navigate('/myprofile')
}

  return (
    <ProfileTile>
     <ProfilePic width = "200" src={byteSource} onClick = {handleProfileSelect}/>
     <ProfileName>{profile.name}</ProfileName>
     <button type="button" onClick = {handleMyProfile}>Full Profile</button>
     <Routes>
          <Route path="/myprofile" element={<MyProfileContainer />} />
      </Routes>
    </ProfileTile>
  )
}

export default UserProfile
