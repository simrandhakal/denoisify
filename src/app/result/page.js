import Link from "next/link";

export default function Home() {
  const results = [
    { id: 123, name: "Result 123" },
    { id: 456, name: "Result 456" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Previous Results</h1>
        <p className="text-gray-600 text-center mb-4">Click on a result to view details:</p>
        <ul className="space-y-3">
          {results.map((result) => (
            <li key={result.id}>
              <Link
                href={`/result/${result.id}`}
                className="block w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 hover:bg-blue-700"
              >
                {result.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
