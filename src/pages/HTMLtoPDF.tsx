import { FileUpload } from "../components/FileUpload";

export const HTMLtoPDF = () => {
    return (
        <FileUpload
        title="HTML to PDF"
        description="Convert HTML to PDF in the best app out there. you can convert HTML to PDF in seconds."
        accept={['text/html']}
        maxFileSize="10000000"
        onConvert={() => console.log("Convert to PDF")} 
        />
    )
}

export default HTMLtoPDF;