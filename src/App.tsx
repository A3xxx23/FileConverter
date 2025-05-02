import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import FileToPDF from './pages/FiletoPDF';
import ImageToPDF from './pages/ImagetoPDF';
import UrlToPDF from './pages/URLtoPDF';
import HTMLtoPDF from './pages/HTMLtoPDF';
import Home from './components/Home';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/file-to-pdf" element={<FileToPDF />} />
          <Route path="/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/url-to-pdf" element={<UrlToPDF />} />
          <Route path="/html-to-pdf" element={<HTMLtoPDF />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
