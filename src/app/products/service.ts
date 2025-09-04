import { ModelProduct } from "@/models/model-product/type";
import { V1Instance } from "@/utils/axios-instances";
import { handleErrorService } from "@/utils/handle-error-service";
import { AxiosError, AxiosResponse } from "axios";

const GetProducts = async () => {
  try {
    const response: AxiosResponse<ModelProduct[]> = await V1Instance.get(`list-product`);
    return response.data;
  } catch (error) {
    throw new Error(handleErrorService(error as AxiosError));
  }
};

export default GetProducts;