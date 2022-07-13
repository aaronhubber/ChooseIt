import React, { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import PdfView from '../components/PdfView'



const MyProfileContainer = ({signOutUser, currentProfile}) => {


    if (!currentProfile) return null;
    // if(currentProfile.pfds.length() = 0) return null
    let byteSource = "data:image/png;base64," + currentProfile.profilepicture.picture
    // let byteSourcePdf = "data:application/pdf;base64," + currentProfile.pdfs[0].data
    

    return(
    <>
    <Navigation signOutUser = {signOutUser}/>
        <h1>
            Profile Details
            
            {currentProfile.name}
            {currentProfile.profilepicture.description}
            <img src = {byteSource} />
            </h1>
            {/* <img src = {byteSourcePdf} /> */}
            <PdfView currentProfile = {currentProfile}/>      
    </>
)}

// trying to find id by profile, ideally when we get to this page it would have selected the profile and stored it under either current profile or select profile and then we can access as normal. Perhaps we have to map to select an id? 

export default MyProfileContainer