import React, { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import PdfView from '../components/PdfView'
import { putPdf } from "../services/services";
import styled from 'styled-components'
import { FaFileUpload } from 'react-icons/fa';


const Pic = styled.img `
border-style:solid;
border-width:2px;
border-color:grey;
margin-left:50px;
`

const InputSubmit = styled.input`
  width:150px;
  background-color: #296364;
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size:30px;
  margin: 10px 2px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);};`

const FileButton = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`
const Label = styled.label`
cursor:pointer;
font-family:Arial, Helvetica, sans-serif;
text-align:center;
font-size:26px;
font-style:bold;
background: #296364;
color: white;
padding:11px;
&:hover{
    transform: scale(0.9);}

`
const H1 = styled.h1`
text-align:center;`

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
        <H1>{currentProfile.name}'s Profile</H1>       
        <Pic src = {byteSource} />           
        {docs}
         <div>
         <form onSubmit={handleSubmit}>
         <Label>
         Upload PDF
        <FaFileUpload/>
           <FileButton id = "input" type = "file" onChange= {handlePdfFileAndPdfURL}/>
           </Label>
            <InputSubmit id = "input" type = "submit"/>
        </form>
         </div>

    </>
)}

// trying to find id by profile, ideally when we get to this page it would have selected the profile and stored it under either current profile or select profile and then we can access as normal. Perhaps we have to map to select an id? 

export default MyProfileContainer