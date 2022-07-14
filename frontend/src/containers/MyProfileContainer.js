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
width:300px;
`

const SelectedImage = styled.img`
width:50%;
;
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

const InputChoose = styled.input`
width: 155px;
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

const H2 = styled.h2`
text-align:center;`

const MainFlex = styled.div`
display:flex;
flex-direction:row;`

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
        <H2>Assistance required: {currentProfile.assistanceLevel}</H2> 
        <MainFlex>
        <div>
        <Pic src = {byteSource} />          
        </div> 
        {docs}
         <div>
         <form onSubmit={handleSubmit}>
         {/* <Label>
         Upload PDF
        <FaFileUpload/> */}
           <InputChoose id = "input" type = "file" onChange= {handlePdfFileAndPdfURL}/>
           <SelectedImage  width = "100vw" src={pdfURL} alt="" />
           {/* </Label> */}
            <InputSubmit id = "input" type = "submit"/>
        </form>
         </div>
         </MainFlex>

    </>
)}

export default MyProfileContainer