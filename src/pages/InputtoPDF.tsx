import { FileUpload } from "../components/FileUpload";

export const InputtoPDF = () => {
  return (
    <FileUpload
    title="Input to PDF"
    description="Upload a Input file and we'll convert it to PDF with the best app available. You can convert Input files to PDF in seconds."
    accept={[".pdf", ".docx", ".doc", ".txt", ".xlsx", ".xls", ".csv", ".pptx", ".ppt", ".html", ".htm", ".xml", ".json", ".zip", ".rar", ".jpeg", ".jpg", ".png", ".gif", ".bmp", ".svg", ".webp", ".mp4", ".avi", ".mkv", ".mp3", ".wav", ".aac", ".flac", ".ogg", ".wma", ".m4a", ".m4v", ".mov", ".wmv", ".mpg", ".mpeg", ".mpeg2", ".mpeg4", ".mpeg1", ".mpeg2", ".mpeg4", ".mpeg1", ".mpeg2", ".mpeg4", ".mpeg1", ".mpeg2", ".mpeg4", ".mpeg1", ".mpeg2", ".mpeg4", ".mpeg1", ".mpeg2", ".mpeg4", ]}
    maxFileSize="10000000"
    onConvert={() => console.log("Convert to PDF")} 
    />
  )
};

export default InputtoPDF;