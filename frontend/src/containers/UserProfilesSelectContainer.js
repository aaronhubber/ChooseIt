import React, {useState, useEffect} from 'react'
import UserProfile from '../components/UserProfile';
// import getUsers from '../services/services';

const UserProfilesSelectContainer = () => {

  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    getUsers().then((res2) => setAllProfiles(res2));
  }, []);



   const getUsers = () => {
    return fetch("http://localhost:8080/userprofiles")
    .then((res) => res.json());
};



  const profileTiles = allProfiles.map((profile, index) => {
        return <UserProfile profile={profile} key={index} />;
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
