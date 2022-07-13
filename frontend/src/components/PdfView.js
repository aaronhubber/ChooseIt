import React from 'react'

const PdfView = ({currentProfile}) => {

   if(currentProfile.pdfs.length === 0) return null

  

    
  return (
    <>
    <div>
        <object 
        style={{width: '100%', height: '200pt'}} 
        type="application/pdf" 
        data={'data:application/pdf;base64,'+currentProfile.pdfs[0].data}>
        </object>   
    </div>
    <div>{currentProfile.pdfs[0].description}</div>
    </>
  )
}

export default PdfView
