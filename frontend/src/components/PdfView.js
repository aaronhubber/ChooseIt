import React from 'react'

const PdfView = ({currentProfile, pdfURL}) => {

   if(currentProfile.pdfs.length === 0) return null



    
  return (
    <>
    <div>
        <object type="application/pdf"
                data={pdfURL}
                width="250"
                height="200">
            </object>  
    </div>
    <div>{currentProfile.pdfs[0].description}</div>
    </>
  )
}

export default PdfView
