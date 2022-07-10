import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
`

const ProfilePic = styled.img`
border-style:solid;
border-width:2px;
border-color:grey;
width: 15w;
`
const ProfileName = styled.h2`
font-family:Arial, Helvetica, sans-serif;
text-align:center;
`


const UserProfile = ({profile , selectProfile}) => {

let byteSource = "data:" + profile.contentType + ";base64," + profile.profilepicture.picture

const handleProfileSelect = () => {
  selectProfile(profile);
};

  return (
    <ProfileTile>
     <ProfilePic width = "200" src={byteSource} onClick = {handleProfileSelect}/>
     <ProfileName>{profile.name}</ProfileName>
    </ProfileTile>
  )
}

export default UserProfile
