import { FileUpload } from "../components/FileUpload"

export const HTMLtoImage = () => {
    return (
        <FileUpload
        title="HTML to Image"
        description="Convert image to PDF in the best app out there. you can convert HTML to Image in seconds." 
        accept={[".html"]}
        maxFileSize="10000000"
        onConvert={() => console.log("Convert to Image")}        
        />
    )
}

export default HTMLtoImage