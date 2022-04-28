import { Account } from './account.model';
import { Job } from './job.model';

export interface Bewerbung {
  bewerbungid?: number;
  datum: Date;
  status: 0;
  bewerber: Account;
  jobangebot: Job;
}
