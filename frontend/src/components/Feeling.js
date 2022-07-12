import React from "react"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


const Feeling = ({feeling}) => {

let byteSource = "data:image/png;base64," + feeling.picture
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
      pdf.save('FEELING.pdf');
    };

    return (
        <>
        <div>
        <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
        </button>
        <div ref={printRef}>{feeling.title}<img src = {byteSource} value={feeling}></img></div>
        </div>
  
        
        </>
    )
}

  

export default Feeling