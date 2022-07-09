import React from 'react';



const UserProfile = ({profile}) => {
  return (
    <div>
    <h1> {profile.name}</h1>
    <h2>{profile.assistanceLevel}</h2>
     {/* <img width = "200" src={profile.profilepicture}/> */}
    </div>
  )
}

export default UserProfile
