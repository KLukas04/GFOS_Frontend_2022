import { Address } from '../models/address.model';

export interface Applicant {
  bewerberid: number;
  name: string;
  vorname: string;
  email: string;
  adresse: Address;
}
