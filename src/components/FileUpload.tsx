import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import { useState } from 'react';
import ConvertApi from 'convertapi-js';
import toast from 'react-hot-toast';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);

interface Props {
  title: string;
  description: string;
  accept?: string[];
  maxFileSize?: string;
  onConvert: (file: File | null) => void;
}

export const FileUpload = ({ title, description, accept, maxFileSize = '200MB', onConvert }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [files, setFiles] = useState<any[]>([]);

  const handleConvert = async (file: File | null) => {
    if (!file) return;

    // Autenticación en ConvertAPI
    const convertApi = ConvertApi.auth(import.meta.env.VITE_CONVERTAPI_KEY);
    const params = convertApi.createParams();
    params.add('File', file);
    params.add('Timeout', '30');
    params.add('Timeout', '30');
    params.add('AdBlock', 'true');
    params.add('CookieConsentBlock', 'true');
    params.add('LoadLazyContent', 'true');
    params.add('CompressPDF', 'true');

    try {
      let result;

      if (file.name.endsWith('.html') || file.name.endsWith('.htm')) {
        // HTML a PDF
        result = await convertApi.convert('html', 'pdf', params);
        console.log('File converted from HTML to PDF:', result);
        toast.success('File converted successfully!', {
          position: 'bottom-center',
          duration: 5000,
      });
      } else if (file.name.endsWith('.csv')) {
        // CSV a PDF
        result = await convertApi.convert('csv', 'pdf', params);
        console.log('File converted from CSV to PDF:', result);
        toast.success('File converted successfully!', {
          position: 'bottom-center',
          duration: 5000,
      });
      } else if (file.name.endsWith('.pdf')) {
        // PDF a DOCX
        result = await convertApi.convert('pdf', 'docx', params);
        console.log('File converted from PDF to Docx:', result);
        toast.success('File converted successfully!', {
          position: 'bottom-center',
          duration: 5000,
      });

        const fileUrl = result.files[0].Url;
        window.open(fileUrl, '_blank');
        const convertedFile = new File([await fetch(result.files[0].Url).then(res => res.blob())], result.files[0].FileName || 'converted-file');
        onConvert(convertedFile);
        return;
      } else if (file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
        // Docx a PDF
        result = await convertApi.convert('docx', 'pdf', params);
        console.log('File converted from Docx to PDF:', result);
        toast.error('Error converting file!', {
          position: 'bottom-center',
          duration: 5000,
      });

        const fileUrl = result.files[0].Url;
        window.open(fileUrl, '_blank');
        const convertedFile = new File([await fetch(fileUrl).then(res => res.blob())], result.files[0].FileName || 'converted-file.pdf');
        onConvert(convertedFile);
        return;

      } else {
        console.error('Unsupported file type. Only docx, doc, HTML, and CSV files are allowed.');
        toast.error('Error converting file!', {
          position: 'bottom-center',
          duration: 5000,
      });
        return;
      }

      // Obtiene la URL del archivo convertido (para HTML y CSV)
      const fileUrl = result.files[0].Url;
      console.log('URL of the converted file:', fileUrl);

      window.open(fileUrl, '_blank');
      const convertedFile = new File([await fetch(fileUrl).then(res => res.blob())], result.files[0].FileName || 'converted-file');
      onConvert(convertedFile);

    } catch (error) {
      console.error('Error converting file:', error);
    }
  }

  return (
    <section className="text-center px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl sm:text-6xl tracking-tight max-w-2xl animate-fade-in animate-delay-200 font-bold text-center animate-text-gradient inline-flex bg-gradient-to-r from-neutral-100 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:via-slate-400 dark:to-neutral-700">{title}</h1>
      <p className="text-2xl text-center tracking-tight mt-2 max-w-2xl mb-3">{description}</p>

      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        acceptedFileTypes={accept}
        maxFileSize={maxFileSize}
        labelIdle='Drag and drop your file or <span class="filepond--label-action">browse</span>'
        className="text-white"
      />

      <button
        className="mt-2 w-full px-6 py-2 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition"
        disabled={files.length === 0}
        onClick={() => handleConvert(files[0]?.file || null)}
      >
        Convert
      </button>
    </section>
  );
};

