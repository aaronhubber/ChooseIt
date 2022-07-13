import React from "react"
import Feeling from "./Feeling"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import styled from 'styled-components'

const MyEmotionContainer = styled.div`
background:white;
  border-style:solid;
  border-width:2px;
  border-color:grey;
`
const H2 = styled.h2`
text-align:center;`

const FlexTiles = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
width:40vw;
height:370px;`

const ButtonDiv = styled.div`
 display:flex;
 justify-content:center;
 margin-bottom: 15px;`

const DownloadButton = styled.button`
  background-color: #296364;
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size:20px;
  margin: 10px 2px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);}`;



const MyEmotion = ({myEmotion}) => {

    const Ifeel = myEmotion?.map((feeling) => {
        return <Feeling feeling = {feeling}/>
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
    pdf.save('FEELING.pdf' + Date);
    };
    
    return (
        <>
        <div>
        <MyEmotionContainer>
        <H2>How I feel today:</H2>
        <FlexTiles ref={printRef}>{Ifeel}
        </FlexTiles>
        {/* <div ref={printRef}>{feeling.title}<img src = {byteSource} value={feeling}></img></div> */}      
        <ButtonDiv>
        <DownloadButton type="button" onClick={handleDownloadPdf}>
        Download as PDF
        </DownloadButton>  
        </ButtonDiv>
        </MyEmotionContainer>
        </div>
        </>
    )
}

export default MyEmotion;