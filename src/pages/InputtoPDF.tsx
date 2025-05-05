import { FileUpload } from "../components/FileUpload";

export const InputtoPDF = () => {
  return (
    <FileUpload
    title="Input to PDF"
    description="Upload any type of file and we'll convert it to PDF with the best app available. You can convert input files to PDF in seconds."
    maxFileSize="10000000"
    onConvert={() => console.log("Convert to PDF")} 
    />
  )
};

export default InputtoPDF;