"use client";
import { useState, useEffect } from "react";

const useFetchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("https://simrandhakal.pythonanywhere.com/api/conv");
        if (!response.ok) throw new Error("Failed to fetch results");
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return { results, loading, error };
};

export default useFetchResults;
