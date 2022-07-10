import React, {useState, useEffect} from 'react'
import UserProfile from '../components/UserProfile';

const UserProfilesSelectContainer = ({allProfiles, selectProfile}) => {

  const profileTiles = allProfiles.map((profile, index) => {
        return <UserProfile profile={profile} selectProfile = {selectProfile}key={index} />;
      });


      // const profilePicTiles = allProfilePics.map((profilePic, index) => {
      //   return <UserProfilePic profilePic={profilePic} key={index} />;
      // });



  return (

    <>
    <div>
    <div>{profileTiles} 
    </div>
      <h4>I am a profiles container</h4>
    </div>
    </>
  )
}

export default UserProfilesSelectContainer
