import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import DocxtoPDF from './pages/DocxtoPDF';
import PDFtoDocx from './pages/PDFtoDocx';
import HTMLtoPDF from './pages/HTMLtoPDF';
import Home from './components/Home';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import CSVtoPDF from './pages/CSVtoPDF';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar /> 
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/csv-to-pdf" element={<CSVtoPDF />} />
          <Route path="/pdf-to-docx" element={<PDFtoDocx />} />
          <Route path="/docx-to-pdf" element={<DocxtoPDF />} />
          <Route path="/html-to-pdf" element={<HTMLtoPDF />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
