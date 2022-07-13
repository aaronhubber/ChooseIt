import React from 'react'

const PdfView = ({pdf, pdfURL}) => {
  if(!pdf) return null


    
  return (
    <>
    <div>
        <object type="application/pdf"
                data={pdfURL}
                width="250"
                height="200">
            </object>  
    </div>
    <div>{pdf.description} </div>
    </>
  )
}

export default PdfView
