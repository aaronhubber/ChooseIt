import React from "react"
import FavWorkshops from "./FavWorkshops"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const FavouriteWorkshops = ({favoriteWorkshop}) => {

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
        <div>
        <h3>My Choices:</h3>
        <div ref={printRef}>{bestWorkshop}</div>
        <div id="map"></div>
        <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
        </button>
        </div>
        </>
    )
}

export default FavouriteWorkshops;