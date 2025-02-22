"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import { API_URL_INIT } from "@/app/lib/config";

export function useUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const uploadImage = async (name, file) => {
    if (!file) return;

    setLoading(true);
    setError(null);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("input_image", file);

      axios
        .post(API_URL_INIT, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
            if (response.data && response.data.data.reference_id) {
            router.push(`/result/${response.data.data.reference_id}`);
            } else {
            setError("Upload successful, but reference ID is missing.");
            }
        })
        .catch(() => {
            setError("Upload failed. Please try again.");
        })
        .finally(() => {
            setLoading(false);
        });
  };

  return { uploadImage, loading, error };
}
