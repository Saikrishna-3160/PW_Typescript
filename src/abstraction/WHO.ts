import type { UNO } from "./UNO.js";

export interface WHO extends UNO{
    covidVaccination(): void;
}