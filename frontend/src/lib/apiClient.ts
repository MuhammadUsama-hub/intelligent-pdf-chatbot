// src/lib/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Change if backend runs elsewhere
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
