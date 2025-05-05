import { FileUpload } from "../components/FileUpload"

export const PDFtoDocx = () => {
    return (
        <FileUpload
        title="PDF to Docx"
        description="Convert image to PDF in the best app out there. you can convert HTML to Image in seconds." 
        accept={['application/pdf']}
        maxFileSize="200MB"
        onConvert={() => console.log("Convert to Docx")}        
        />
    )
}

export default PDFtoDocx;