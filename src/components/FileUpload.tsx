import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import { useState } from 'react';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);

interface Props {
  title: string;
  description: string;
  accept?: string[];
  maxFileSize?: string;
  onConvert: (file: File | null) => void;
}

export const FileUpload = ({ title, description, accept, maxFileSize = '60MB', onConvert }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [files, setFiles] = useState<any[]>([]);

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
        onClick={() => onConvert(files[0]?.file || null)}
      >
        Convert
      </button>
    </section>
  );
};
