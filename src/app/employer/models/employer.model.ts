export interface Employer {
  personalerid?: number;
  rang: number;
  name: string;
  vorname: string;
  email: string;
  telefon: string;
  fachgebiet?: {
    name: string;
  };
}
