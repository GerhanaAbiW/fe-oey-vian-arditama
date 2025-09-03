import { AxiosError, AxiosResponse } from "axios";
import { ModelDashboardInfromation } from "./type";
import { V1Instance } from "@/utils/axios-instances";
import { handleErrorService } from "@/utils/handle-error-service";

const GetDashboardInformation = async () => {
  try {
    const response: AxiosResponse<ModelDashboardInfromation[]> = await V1Instance.get(`dashboard`);
    return response.data;
  } catch (error) {
    throw new Error(handleErrorService(error as AxiosError));
  }
};

export default GetDashboardInformation;
