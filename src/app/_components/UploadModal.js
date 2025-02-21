"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useUpload } from "@/hooks/useUpload";
import { useDropzone } from "react-dropzone";

export default function UploadModal() {
  const { uploadImage, loading, error } = useUpload();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Dialog>
      <DialogTrigger className="bg-[#2563EB] text-[#f0efef] border border-transparent py-[0.8rem] px-[1.8rem] rounded-[0.5rem] w-[14rem] 
                        transition-all duration-500 ease-in-out hover:border-white relative inline-block group">
        <span className="relative inline-block transition-all duration-500 pr-0 group-hover:pr-6">
            Upload Image
            <span className="absolute opacity-0 top-0 right-[-20px] transition-all duration-500 group-hover:opacity-100 group-hover:right-0">
              &raquo;
            </span>
          </span>
      </DialogTrigger>
      <DialogContent className="bg-[#131313] text-[#f0efef] p-6 rounded-lg">
        <DialogTitle><h2 className="text-xl font-semibold mb-4">Upload an Image</h2></DialogTitle>
        

        <input
          type="text"
          placeholder="Enter a name"
          className="w-full p-2 bg-[#1d1d29] text-[#f0efef] rounded-md border border-gray-700 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div
          {...getRootProps()}
          className="border-2 border-dashed p-4 rounded-md text-center cursor-pointer mb-4 bg-[#1d1d29]"
        >
          <input {...getInputProps()} />
          {file ? <p>{file.name}</p> : <p>Drag & drop an image here or click to select</p>}
        </div>

        {preview && <img src={preview} alt="Preview" className="w-[15rem] rounded-md mb-4 mx-auto" />}

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="bg-[#2563EB] text-white py-3 px-4 border border-transparent rounded-md w-full hover:border-white disabled:bg-gray-700"
          onClick={() => uploadImage(name, file)}
          disabled={loading || !file || !name}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </DialogContent>
    </Dialog>
  );
}
