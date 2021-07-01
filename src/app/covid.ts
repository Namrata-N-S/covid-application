export interface topBlockDetails {
  sites: sitesDetails;
  sessions: sitesDetails;
  registration: registrationDetails;
  vaccination: vaccinationDetails;
}

export interface sitesDetails {
  total: number;
  govt: number;
  pvt: number;
  today: number;
}

export interface registrationDetails {
  total: number;
  cit_18_45: number;
  cit_45_above: number;
  today: number;
}

export interface vaccinationDetails {
  total: number;
  male: number;
  female: number;
  others: number;
  covishield: number;
  covaxin: number;
  sputnik: number;
  today: number;
  tot_dose_1: number;
  tot_dose_2: number;
  total_doses: number;
  aefi: number;
  today_dose_one: number;
  today_dose_two: number;
  today_male: number;
  today_female: number;
  today_others: number;
  today_aefi: number;
}

//for vaccination by age
export interface VaccinationByAge {
  total: number;
  vac_18_45: number;
  vac_45_60: number;
  above_60: number;
}

export interface CovidDetails {
  topBlock: topBlockDetails;
  vaccinationByAge: VaccinationByAge;
}
