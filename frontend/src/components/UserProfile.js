import React, { useState, useEffect } from 'react'


const UserProfile = ({profile , selectProfile}) => {

let byteSource = "data:" + profile.contentType + ";base64," + profile.profilepicture.picture

const handleProfileSelect = () => {
  selectProfile(profile);
};

  return (
    <div>
     <h1> {profile.name}</h1>
     <h1>{profile.assistanceLevel}</h1>
     <img width = "200" src={byteSource} onClick = {handleProfileSelect}/>
    
    </div>
  )
}

export default UserProfile
