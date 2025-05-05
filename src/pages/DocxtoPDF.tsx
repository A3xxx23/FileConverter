import { FileUpload } from "../components/FileUpload";

export const DocxtoPDF = () => {
  return (
    <FileUpload
     title="Docx to PDF"
     description="Convert your Docx files to PDF in the best app out there. you can convert Docx files to PDF in seconds." 
     accept={['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ]}
     maxFileSize="200MB"
     onConvert={() => console.log("Convert to PDF")} 
    />
  );
};

export default DocxtoPDF;