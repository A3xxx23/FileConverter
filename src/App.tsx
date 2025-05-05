import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import PDFtoImage from './pages/PDFtoImage';
import { HTMLtoImage } from './pages/HTMLtoImage';
import HTMLtoPDF from './pages/HTMLtoPDF';
import Home from './components/Home';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import InputtoPDF from './pages/InputtoPDF';


const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/input-to-pdf" element={<InputtoPDF />} />
          <Route path="/html-to-image" element={<HTMLtoImage />} />
          <Route path="/pdf-to-image" element={<PDFtoImage />} />
          <Route path="/html-to-pdf" element={<HTMLtoPDF />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
