"use client";
import Link from "next/link";
import { useState } from "react";
import useFetchResults from "@/hooks/useFetchResults";
import ImageViewer from "awesome-image-viewer";

export default function Home() {
  const { results, loading, error } = useFetchResults();
  const [enlargedImage, setEnlargedImage] = useState(null);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#131313]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#f0efef] text-lg mt-4">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  const openImageViewer = (index, result) => {
    const images = [
      { src: result.input_image, title: "Before" },
      { src: result.output_image, title: "After" }
    ];

    new ImageViewer({
      images: images.map((img) => ({ mainUrl: img.src })),
      startAt: index,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131313] py-5 px-5 mt-[5rem]">
      <div className="bg-[#1D1D29] shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-[2rem] font-semibold text-[#f0efef] mb-2 text-center">
          Previous Results
        </h1>
        <p className="text-[#f0efef] text-center mb-4">
          Click on a result to view details:
        </p>
        <ul className="space-y-6">
          {results.map((result) => (
            <li
              key={result.reference_id}
              className="bg-[#f0efef] p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4 justify-between">
                <img
                  src={result.input_image}
                  alt="Before"
                  className="w-24 h-24 object-cover rounded-md border cursor-pointer hover:border-black"
                  onClick={() => openImageViewer(0, result)} // Open the image viewer for Before
                />
                <img
                  src={result.output_image}
                  alt="After"
                  className="w-24 h-24 object-cover rounded-md border cursor-pointer hover:border-black"
                  onClick={() => openImageViewer(1, result)} // Open the image viewer for After
                />
                <div className="flex-1 flex flex-row gap-[3rem] items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-950 mb-2">
                      {result.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Resolution: {result.resolution}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Status: <span className="capitalize">{result.status}</span>
                    </p>
                  </div>
                  <Link
                    href={`/result/${result.reference_id}`}
                    className="whitespace-nowrap inline-block text-center bg-blue-600 text-white font-medium py-2 px-5 rounded-md transition duration-300 hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Enlarged Image (Using ImageViewer for before and after images) */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 border border-transparent hover:border-black"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Enlarged"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
