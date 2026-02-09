import type { UNHC } from "./UNHC.js";
import type { WHO } from "./WHO.js";

export interface USmedical extends WHO, UNHC{

    min_fee: number; //no initialization of var

    physio(): void;
    cardio(): void;
    emergency(): void;
}