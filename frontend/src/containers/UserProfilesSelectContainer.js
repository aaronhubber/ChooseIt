import React from 'react'
import UserProfile from '../components/UserProfile';

const UserProfilesSelectContainer = ({allProfiles}) => {

    const profileTiles = allProfiles?.map((profile, index) => {
        return <UserProfile profile={profile} key={index} />;
      });
  return (

    <>
    <div>
    <div>
    {profileTiles} 
    </div>
    <h4>I am a profiles container</h4>
    </div>
    </>
  )
}

export default UserProfilesSelectContainer
