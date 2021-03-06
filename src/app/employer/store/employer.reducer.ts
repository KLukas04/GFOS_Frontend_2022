import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import {
  failure,
  inProgress,
  notAsked,
  RemoteData,
  success,
} from 'ngx-remotedata';
import { Job } from 'src/app/jobs/models/job.model';
import { Applicant } from '../models/applicant.model';
import { Application } from '../models/application.model';
import { ApplicationDetails } from '../models/applicationDetails.model';
import { Employer } from '../models/employer.model';
import { Interesse } from '../models/interesse.model';
import { LebenslaufStation } from '../models/lebenslaufstation.model';
import { Message } from '../models/message.model';
import { Todo } from '../models/todo.model';

import * as fromActions from './employer.actions';

export const employerFeatureKey = 'employer';

export interface EmployerState {
  todos: RemoteData<Todo[], HttpErrorResponse>;
  createNewTodo: string | null;
  onwAccount: RemoteData<Employer, HttpErrorResponse>;
  createNewEmployer: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    password: string | null;
    section: string | null;
  };
  createdJobs: RemoteData<Job[], HttpErrorResponse>;
  applicationsForJob: RemoteData<Application[], HttpErrorResponse>;
  applicationDetails: ApplicationDetails;
  createNewJob: {
    basics: {
      title: string | null;
      type: string | null;
      section: string | null;
      deadline: Date | null;
      startDate: Date | null;
      temporary: boolean;
      end: Date | null;
    };
    address: {
      street: string | null;
      number: string | null;
      plz: number | null;
      town: string | null;
      country: string | null;
    };
    shortDescription: string | null;
    description: string | null;
    vacation: number | null;
    remote: boolean;
    wageMonth: number | null;
    wageYear: number | null;
    advantages: string | null;
  };
  applications: RemoteData<Application[], HttpErrorResponse>;
  acceptedApplications: RemoteData<Application[], HttpErrorResponse>;
}

export const initialState: EmployerState = {
  todos: notAsked(),
  createNewTodo: null,
  onwAccount: notAsked(),
  createNewEmployer: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    section: null,
  },
  createdJobs: notAsked(),
  applicationsForJob: notAsked(),
  applicationDetails: {
    image: notAsked(),
    cvPdf: notAsked(),
    letterPdf: notAsked(),
    applicant: notAsked(),
    interests: notAsked(),
    stations: notAsked(),
    messages: notAsked(),
    newMessage: null,
  },
  createNewJob: {
    basics: {
      title: null,
      type: null,
      section: null,
      deadline: null,
      startDate: null,
      temporary: false,
      end: null,
    },
    address: {
      street: null,
      number: null,
      plz: null,
      town: null,
      country: null,
    },
    shortDescription: null,
    description: null,
    vacation: null,
    remote: false,
    wageMonth: null,
    wageYear: null,
    advantages: null,
  },
  applications: notAsked(),
  acceptedApplications: notAsked(),
};

const employerReducer = createReducer(
  initialState,
  on(fromActions.loadTodos, (state) =>
    produce(state, (draft) => {
      draft.todos = inProgress<Todo[], HttpErrorResponse>();
    })
  ),
  on(fromActions.loadTodosSuccess, (state, { todos }) =>
    produce(state, (draft) => {
      draft.todos = success<Todo[], HttpErrorResponse>(todos);
    })
  ),
  on(fromActions.loadTodosError, (state, { error }) =>
    produce(state, (draft) => {
      draft.todos = failure<Todo[], HttpErrorResponse>(error);
    })
  ),
  on(fromActions.newTodoInserted, (state, { todo }) =>
    produce(state, (draft) => {
      draft.createNewTodo = todo;
    })
  ),
  on(fromActions.loadSelf, (state) =>
    produce(state, (draft) => {
      draft.onwAccount = inProgress<Employer, HttpErrorResponse>();
    })
  ),
  on(fromActions.loadSelfSuccess, (state, { employer }) =>
    produce(state, (draft) => {
      draft.onwAccount = success<Employer, HttpErrorResponse>(employer);
    })
  ),
  on(fromActions.loadSelfError, (state, { error }) =>
    produce(state, (draft) => {
      draft.onwAccount = failure<Employer, HttpErrorResponse>(error);
    })
  ),
  on(fromActions.newEmployerFirstNameInserted, (state, { firstName }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.firstName = firstName;
    })
  ),
  on(fromActions.newEmployerLastNameInserted, (state, { lastName }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.lastName = lastName;
    })
  ),
  on(fromActions.newEmployerEmailInserted, (state, { email }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.email = email;
    })
  ),
  on(fromActions.newEmployerPhoneInserted, (state, { phone }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.phone = phone;
    })
  ),
  on(fromActions.newEmployerPasswordInserted, (state, { password }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.password = password;
    })
  ),
  on(fromActions.newEmployerSectionInserted, (state, { section }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.section = section;
    })
  ),
  on(fromActions.newJobTitleInserted, (state, { title }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.title = title;
    })
  ),
  on(fromActions.newJobTypeInserted, (state, { typ }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.type = typ;
    })
  ),
  on(fromActions.newJobSectionInserted, (state, { section }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.section = section;
    })
  ),
  on(fromActions.newJobDeadlineInserted, (state, { deadline }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.deadline = deadline;
    })
  ),
  on(fromActions.newJobStartDateInserted, (state, { startDate }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.startDate = startDate;
    })
  ),
  on(fromActions.newJobTemporaryInserted, (state, { temporary }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.temporary = temporary;
    })
  ),
  on(fromActions.newJobEndDateInserted, (state, { endDate }) =>
    produce(state, (draft) => {
      draft.createNewJob.basics.end = endDate;
    })
  ),
  on(fromActions.newJobStreetInserted, (state, { street }) =>
    produce(state, (draft) => {
      draft.createNewJob.address.street = street;
    })
  ),
  on(fromActions.newJobNumberInserted, (state, { number }) =>
    produce(state, (draft) => {
      draft.createNewJob.address.number = number;
    })
  ),
  on(fromActions.newJobPlzInserted, (state, { plz }) =>
    produce(state, (draft) => {
      draft.createNewJob.address.plz = plz;
    })
  ),
  on(fromActions.newJobTownInserted, (state, { town }) =>
    produce(state, (draft) => {
      draft.createNewJob.address.town = town;
    })
  ),
  on(fromActions.newJobCountryInserted, (state, { country }) =>
    produce(state, (draft) => {
      draft.createNewJob.address.country = country;
    })
  ),
  on(
    fromActions.newJobShortDescriptionInserted,
    (state, { shortDescription }) =>
      produce(state, (draft) => {
        draft.createNewJob.shortDescription = shortDescription;
      })
  ),
  on(fromActions.newJobDescriptionInserted, (state, { description }) =>
    produce(state, (draft) => {
      draft.createNewJob.description = description;
    })
  ),
  on(fromActions.newJobVacationInserted, (state, { vacation }) =>
    produce(state, (draft) => {
      draft.createNewJob.vacation = vacation;
    })
  ),
  on(fromActions.newJobRemoteInserted, (state, { remote }) =>
    produce(state, (draft) => {
      draft.createNewJob.remote = remote;
    })
  ),
  on(fromActions.newJobWageMonthInserted, (state, { wageMonth }) =>
    produce(state, (draft) => {
      draft.createNewJob.wageMonth = wageMonth;
    })
  ),
  on(fromActions.newJobWageYearInserted, (state, { wageYear }) =>
    produce(state, (draft) => {
      draft.createNewJob.wageYear = wageYear;
    })
  ),
  on(fromActions.newJobAdvantagesInserted, (state, { advantages }) =>
    produce(state, (draft) => {
      draft.createNewJob.advantages = advantages;
    })
  ),
  on(fromActions.loadCreatedJobs, (state) =>
    produce(state, (draft) => {
      draft.createdJobs = inProgress<Job[], HttpErrorResponse>();
    })
  ),
  on(fromActions.loadCreatedJobsSuccess, (state, { jobs }) =>
    produce(state, (draft) => {
      draft.createdJobs = success<Job[], HttpErrorResponse>(jobs);
    })
  ),
  on(fromActions.loadCreatedJobsError, (state, { error }) =>
    produce(state, (draft) => {
      draft.createdJobs = failure<Job[], HttpErrorResponse>(error);
    })
  ),
  on(fromActions.loadApplicationsForJob, (state) =>
    produce(state, (draft) => {
      draft.applicationsForJob = inProgress<Application[], HttpErrorResponse>();
    })
  ),
  on(fromActions.loadApplicationsForJobSuccess, (state, { applications }) =>
    produce(state, (draft) => {
      draft.applicationsForJob = success<Application[], HttpErrorResponse>(
        applications
      );
    })
  ),
  on(fromActions.loadApplicationsForJobError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationsForJob = failure<Application[], HttpErrorResponse>(
        error
      );
    })
  ),
  on(fromActions.loadApplications, (state) =>
    produce(state, (draft) => {
      draft.applications = inProgress<Application[], HttpErrorResponse>();
    })
  ),
  on(fromActions.loadApplicationsSuccess, (state, { applications }) =>
    produce(state, (draft) => {
      draft.applications = success<Application[], HttpErrorResponse>(
        applications
      );
    })
  ),
  on(fromActions.loadApplicationsError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applications = failure<Application[], HttpErrorResponse>(error);
    })
  ),
  on(fromActions.loadApplicationDetailsImage, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.image = inProgress<string, HttpErrorResponse>();
    })
  ),
  on(fromActions.loadApplicationDetailsImageSuccess, (state, { base64 }) =>
    produce(state, (draft) => {
      draft.applicationDetails.image = success<string, HttpErrorResponse>(
        base64
      );
    })
  ),
  on(fromActions.loadApplicationDetailsImageError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.image = failure<string, HttpErrorResponse>(
        error
      );
    })
  ),
  on(fromActions.loadApplicationDetailsCvPdf, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.cvPdf = inProgress<string, HttpErrorResponse>();
    })
  ),
  on(fromActions.loadApplicationDetailsCvPdfSuccess, (state, { base64 }) =>
    produce(state, (draft) => {
      draft.applicationDetails.cvPdf = success<string, HttpErrorResponse>(
        base64
      );
    })
  ),
  on(fromActions.loadApplicationDetailsCvPdfError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.cvPdf = failure<string, HttpErrorResponse>(
        error
      );
    })
  ),
  on(fromActions.loadApplicationDetailsLetterPdf, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.letterPdf = inProgress<
        string,
        HttpErrorResponse
      >();
    })
  ),
  on(fromActions.loadApplicationDetailsLetterPdfSuccess, (state, { base64 }) =>
    produce(state, (draft) => {
      draft.applicationDetails.letterPdf = success<string, HttpErrorResponse>(
        base64
      );
    })
  ),
  on(fromActions.loadApplicationDetailsLetterPdfError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.letterPdf = failure<string, HttpErrorResponse>(
        error
      );
    })
  ),
  on(fromActions.loadApplicationDetailsApplicant, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.applicant = inProgress<
        Applicant,
        HttpErrorResponse
      >();
    })
  ),
  on(
    fromActions.loadApplicationDetailsApplicantSuccess,
    (state, { applicant }) =>
      produce(state, (draft) => {
        draft.applicationDetails.applicant = success<
          Applicant,
          HttpErrorResponse
        >(applicant);
      })
  ),
  on(fromActions.loadApplicationDetailsApplicantError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.applicant = failure<
        Applicant,
        HttpErrorResponse
      >(error);
    })
  ),
  on(fromActions.loadApplicationDetailsApplicant, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.applicant = inProgress<
        Applicant,
        HttpErrorResponse
      >();
    })
  ),
  on(
    fromActions.loadApplicationDetailsApplicantSuccess,
    (state, { applicant }) =>
      produce(state, (draft) => {
        draft.applicationDetails.applicant = success<
          Applicant,
          HttpErrorResponse
        >(applicant);
      })
  ),
  on(fromActions.loadApplicationDetailsApplicantError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.applicant = failure<
        Applicant,
        HttpErrorResponse
      >(error);
    })
  ),
  on(fromActions.loadApplicationDetailsInterests, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.interests = inProgress<
        Interesse[],
        HttpErrorResponse
      >();
    })
  ),
  on(
    fromActions.loadApplicationDetailsInterestsSuccess,
    (state, { interests }) =>
      produce(state, (draft) => {
        draft.applicationDetails.interests = success<
          Interesse[],
          HttpErrorResponse
        >(interests);
      })
  ),
  on(fromActions.loadApplicationDetailsInterestsError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.interests = failure<
        Interesse[],
        HttpErrorResponse
      >(error);
    })
  ),
  on(fromActions.loadApplicationDetailsStations, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.stations = inProgress<
        LebenslaufStation[],
        HttpErrorResponse
      >();
    })
  ),
  on(fromActions.loadApplicationDetailsStationsSuccess, (state, { stations }) =>
    produce(state, (draft) => {
      draft.applicationDetails.stations = success<
        LebenslaufStation[],
        HttpErrorResponse
      >(stations);
    })
  ),
  on(fromActions.loadApplicationDetailsStationsError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.stations = failure<
        LebenslaufStation[],
        HttpErrorResponse
      >(error);
    })
  ),
  on(fromActions.loadApplicationDetailsMessages, (state) =>
    produce(state, (draft) => {
      draft.applicationDetails.messages = inProgress<
        Message[],
        HttpErrorResponse
      >();
    })
  ),
  on(fromActions.loadApplicationDetailsMessagesSuccess, (state, { messages }) =>
    produce(state, (draft) => {
      draft.applicationDetails.messages = success<Message[], HttpErrorResponse>(
        messages
      );
    })
  ),
  on(fromActions.loadApplicationDetailsMessagesError, (state, { error }) =>
    produce(state, (draft) => {
      draft.applicationDetails.messages = failure<Message[], HttpErrorResponse>(
        error
      );
    })
  ),
  on(fromActions.applicationDetailsNewMessageInserted, (state, { message }) =>
    produce(state, (draft) => {
      draft.applicationDetails.newMessage = message;
    })
  ),
  on(fromActions.loadAcceptedApplications, (state) =>
    produce(state, (draft) => {
      draft.acceptedApplications = inProgress<
        Application[],
        HttpErrorResponse
      >();
    })
  ),
  on(fromActions.loadAcceptedApplicationsSuccess, (state, { applications }) =>
    produce(state, (draft) => {
      draft.acceptedApplications = success<Application[], HttpErrorResponse>(
        applications
      );
    })
  ),
  on(fromActions.loadAcceptedApplicationsError, (state, { error }) =>
    produce(state, (draft) => {
      draft.acceptedApplications = failure<Application[], HttpErrorResponse>(
        error
      );
    })
  )
);

export function reducer(state: EmployerState | undefined, action: Action) {
  return employerReducer(state, action);
}
