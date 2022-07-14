import React from "react"
import FavWorkshops from "./FavWorkshops"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import styled from 'styled-components'


const DownloadButton = styled.button`
display: flex;
justify-content:center;
margin:auto;
  background-color: #296364;
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size:20px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);}`;

const MyChoiceDiv = styled.div`
background-color:white;
border-style:solid;
border-color:grey;
border-width:2px;
padding:10px;
height:390px;
margin-top:35px;`

const H3 = styled.h3`
text-align:center;
padding:0;
margin-bottom:8px;
margin-top:5px;`

const FavouriteWorkshops = ({favoriteWorkshop}) => {

    // const selectedWorkshop =() => {
    //     const musicCount = favoriteWorkshop.filter((musicObject) => musicObject.genre == 1).length;
    //     const artCount = favoriteWorkshop.filter((artObject) => artObject.genre == 2).length;
    //     const gardeningCount = favoriteWorkshop.filter((gardeningObject) => gardeningObject.genre == 0).length;
    //     const cookingCount = favoriteWorkshop.filter((cookingObject) => cookingObject.genre == 2).length;
        
    // }

    const bestWorkshop = favoriteWorkshop?.map((workshop) => {
        return <FavWorkshops workshop = {workshop}/>
    })

    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
        (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('WORKSHOP.pdf');
    };

    return (
        <>
        <MyChoiceDiv>
        <H3>My Choices:</H3>
        <div ref={printRef}>{bestWorkshop}</div>
        <div id="map"></div>
        <DownloadButton type="button" onClick={handleDownloadPdf}>
        Download as PDF
        </DownloadButton>
        </MyChoiceDiv>
        </>
    )
}

export default FavouriteWorkshops;