import REACT_APP_API_HOST_V1 from "@/helpers/constants/api-urls";
import axios from "axios";

export const V1Instance = axios.create({
  baseURL: REACT_APP_API_HOST_V1,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  },
});