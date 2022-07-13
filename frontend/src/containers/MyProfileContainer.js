import React, { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import PdfView from '../components/PdfView'
import { putPdf } from "../services/services";


const MyProfileContainer = ({signOutUser, currentProfile}) => {

    const [pdfFile, setPdfFile] = useState();
    const [pdfURL, setPdfURL] = useState();
    const [allPdfs, setAllPdfs] = useState();


    if (!currentProfile) return null;
  
    // if(currentProfile.pfds.length() = 0) return null
    let byteSource = "data:image/png;base64," + currentProfile.profilepicture.picture
    // let byteSourcePdf = "data:application/pdf;base64," + currentProfile.pdfs[0].data

    
    const handlePdfFile = (e) => {
        const [file] = e.target.files;
        setPdfFile(file)
    };

    const handlePdfURL = (e) => {
        const [file] = e.target.files;
        setPdfURL(URL.createObjectURL(file));
    };

      const handlePdfFileAndPdfURL = (event) => {
        handlePdfURL(event);
        handlePdfFile(event)
    };

    const updatePdfList = (file) => {
        putPdf(currentProfile.id, file).then((profileWithID) => {
          const temp = [...allPdfs];
          temp.push(profileWithID);
          console.log(profileWithID)
          setAllPdfs(temp);
        });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updatePdfList(pdfFile,);
        event.target.reset();
      };

      const docs = currentProfile.pdfs.map((pdf, index) => {
        return <PdfView pdf={pdf} pdfURL={pdfURL} key={index} />;
      });

    return(
    <>
    <Navigation signOutUser = {signOutUser}/>
        <h1>
            Profile Details
            
            {currentProfile.name}
            <img src = {byteSource} />

            </h1>   
          
        {docs}
        

         <div>
         <form onSubmit={handleSubmit}>
           <input id = "input" type = "file" onChange= {handlePdfFileAndPdfURL}/>
            <input id = "input" type = "submit"/>
            </form>


       
         </div>

    </>
)}

// trying to find id by profile, ideally when we get to this page it would have selected the profile and stored it under either current profile or select profile and then we can access as normal. Perhaps we have to map to select an id? 

export default MyProfileContainer