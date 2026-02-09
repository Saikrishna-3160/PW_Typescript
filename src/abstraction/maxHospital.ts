import type { IndianMedical } from "./IndianMedical.js";
import { Medical } from "./medical.js";
import type { UKmedical } from "./UKmedical.js";
import type { USmedical } from "./USmedical.js";

export class MaxHospital extends Medical implements USmedical, UKmedical, IndianMedical{
    
    //UNO (parent class of WHO intrf)
    billing(): void {
        console.log(`max -- billing`);
    }
    
    //UNHC
    publishMedicalNews(): void {
        console.log(`max -- publishMedicalNews`);
    }
    
    //WHO
    covidVaccination(): void {
        console.log("max -- covid vaccination");
    }

    //Common
    emergency(): void {
        console.log("max -- emergency");
    }
    
    ////US
    min_fee: number = 500;

    physio(): void {
        console.log('max -- physio');
    }
    cardio(): void {
        console.log('max -- cardio');
    }

    //UK
    oncology(): void {
        console.log('max -- oncology');
    }
    pedia(): void {
        console.log('max -- pedia');
    }
    dental(): void {
        console.log('max -- dental');
    }

    //INDIAN
    gastro(): void {
        console.log('max -- gastro');
    }
    ent(): void {
        console.log('max -- ent');
    }

    //Max - Individual
    opt(): void{
        console.log('max -- opt');
    }

    //override: medical class method
    override research(): void {
        console.log(`max -- research`);
    }
}