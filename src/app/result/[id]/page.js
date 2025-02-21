"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ResultDetail() {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResultDetail = async () => {
      try {
        const response = await fetch(`https://simrandhakal.pythonanywhere.com/api/conv/${id}`);
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

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131313] p-6">
      <div className="bg-[#1D1D29] shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-[#f0efef] mb-4 text-center">{result.name}</h1>
        <p className="text-[#f0efef] text-sm text-center mb-4">Created: {new Date(result.created).toLocaleString()}</p>

        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-[#f0efef] text-sm">Before</p>
            <img src={result.input_image} alt="Before" className="w-48 h-48 object-cover rounded-md border" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#f0efef] text-sm">After</p>
            <img src={result.output_image} alt="After" className="w-48 h-48 object-cover rounded-md border" />
          </div>
        </div>

        <p className="text-[#f0efef] mt-4 text-sm">Resolution: {result.resolution}</p>
        <p className="text-[#f0efef] text-sm">Status: {result.status}</p>
        <p className="text-[#f0efef] text-sm">Loss: {result.loss}</p>
        <p className="text-[#f0efef] text-sm">Accuracy: {result.accuracy}</p>

        <button
          onClick={() => window.history.back()}
          className="mt-6 block w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
