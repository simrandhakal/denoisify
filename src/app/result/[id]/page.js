"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { API_URL_CONV_ID } from '@/app/lib/config';
import ImageViewer from "awesome-image-viewer";

export default function ResultDetail() {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResultDetail = async () => {
      try {
        const response = await fetch(API_URL_CONV_ID.replace("${id}", id));
        if (!response.ok) throw new Error("Failed to fetch result details");
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResultDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#131313]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  const images = [
    { src: result.input_image, title: "Before" },
    { src: result.output_image, title: "After" }
  ];

  const openImageViewer = (index) => {
    new ImageViewer({
      images: images.map((img) => ({ mainUrl: img.src })),
      startAt: index,
    });
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(result.output_image);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "output_image.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131313] p-6">
      <div className="bg-[#1D1D29] shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-[#f0efef] mb-4 text-center">{result.name}</h1>
        <p className="text-[#f0efef] text-sm text-center mb-4">Created: {new Date(result.created).toLocaleString()}</p>

        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-[#f0efef] text-sm">Before</p>
            <img 
              src={result.input_image} 
              alt="Before" 
              className="w-48 h-48 object-cover rounded-md border border-transparent cursor-pointer hover:border-white" 
              onClick={() => openImageViewer(0)}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#f0efef] text-sm">After</p>
            <img 
              src={result.output_image} 
              alt="After" 
              className="w-48 h-48 object-cover rounded-md border border-transparent cursor-pointer hover:border-white" 
              onClick={() => openImageViewer(1)}
            />
          </div>
        </div>

        <p className="text-[#f0efef] mt-4 text-sm">Resolution: {result.resolution}</p>
        <p className="text-[#f0efef] text-sm">Status: <span className="capitalize">{result.status}</span></p>
        {/* <p className="text-[#f0efef] text-sm">Loss: {result.loss}</p> */}
        {/* <p className="text-[#f0efef] text-sm">Accuracy: {result.accuracy}</p> */}

        <div className="flex gap-8">
          <button
            onClick={() => window.history.back()}
            className="mt-6 block w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Go Back
          </button>
          
          <button
            onClick={downloadImage}
            disabled={result.status !== "completed"}
            className={`mt-6 block w-full text-center font-medium py-2 rounded-lg transition duration-300 
            ${result.status === "completed" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
