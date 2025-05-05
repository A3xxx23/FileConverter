import { FileUpload } from "../components/FileUpload";

export const CSVtoPDF = () => {
  return (
    <FileUpload
    title="CSV to PDF"
    description="Upload CSV files and we'll convert it to PDF with the best app available. You can convert CSV files to PDF in seconds."
    accept={['text/csv', 'application/csv']}
    maxFileSize="200MB"
    onConvert={() => console.log("Convert to PDF")} 
    />
  )
};

export default CSVtoPDF;