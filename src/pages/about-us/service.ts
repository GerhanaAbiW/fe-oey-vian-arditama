import { V1Instance } from "@/utils/axios-instances";
import { handleErrorService } from "@/utils/handle-error-service";
import { AxiosError, AxiosResponse } from "axios";
import { ModelAboutUsInformation } from "./type";

const GetAboutUsInformation = async () => {
  try {
    const response: AxiosResponse<ModelAboutUsInformation[]> =
      await V1Instance.get(`about-us`);
    return response.data;
  } catch (error) {
    throw new Error(handleErrorService(error as AxiosError));
  }
};

export default GetAboutUsInformation;
