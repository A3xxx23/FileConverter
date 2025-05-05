import { FileUpload } from "../components/FileUpload";

export const PDFtoImage = () => {
  return (
    <FileUpload
     title="PDF to Image"
     description="Convert your PDF files to Image in the best app out there. you can convert PDF files to Image in seconds." 
     accept={[]}
     maxFileSize="10000000"
     onConvert={() => console.log("Convert to Image")} 
    />
  );
};

export default PDFtoImage;