import axios from "axios";
import https from "https";

const api = axios.create({
  baseURL: "https://api-ddos.tic.ir/api", 
  httpsAgent: new https.Agent({ rejectUnauthorized: false }), 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
