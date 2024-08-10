import { Regions } from "./regions.enum";
import countriesData from "../../data/regions.json";

export const countries = countriesData;

export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  region: Regions;
  area: number;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  population: number;
  landlocked: boolean;
}
