import React, { useState, useEffect } from 'react'



const UserProfile = ({profile,}) => {
  return (
    <div>
     <h1> {profile.name}</h1>
     <h1>{profile.assistanceLevel}</h1>
     <img width = "200" src={profile.profilepicture}/>
    
    </div>
  )
}

export default UserProfile
