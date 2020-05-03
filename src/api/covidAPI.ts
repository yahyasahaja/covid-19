import axios, { AxiosResponse } from "axios";
import { CovidData, Country } from "@/store/types";

export const fetchCountryAPI = async (): Promise<AxiosResponse<Country[]>> => {
  return await axios.get("/countries");
};

export const fetchCovidAPI = async (
  country: string
): Promise<AxiosResponse<CovidData[]>> => {
  return await axios.get(`/dayone/country/${country}`);
};
