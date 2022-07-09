import React, { useState, useEffect } from 'react'


const UserProfile = ({profile}) => {

// let byteSource = "data:image/jpeg;base64," + profile.profilepicture.picture

  return (
    <div>
     <h1> {profile.name}</h1>
     <h1>{profile.assistanceLevel}</h1>
     {/* <img width = "200" src={byteSource}/> */}
    
    </div>
  )
}

export default UserProfile
