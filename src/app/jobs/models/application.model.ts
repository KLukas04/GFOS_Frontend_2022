import { Job } from './job.model';

export interface Application {
  bewerbungid: number;
  datum: Date;
  status: 0;
  bewerber: {
    bewerberid: number;
    name: string;
    vorname: string;
    email: string;
  };
  jobangebot: Job;
}
