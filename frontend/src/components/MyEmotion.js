import React from "react"
import Feeling from "./Feeling"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


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
        <h3>How I feel today:</h3>
        <div ref={printRef}>{Ifeel}</div>

        <div id="map"></div>
        <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
        </button>
        {/* <div ref={printRef}>{feeling.title}<img src = {byteSource} value={feeling}></img></div> */}
        
        </div>
        </>
    )
}

export default MyEmotion;