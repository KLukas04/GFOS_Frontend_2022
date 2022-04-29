import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Employer } from '../models/employer.model';
import { Job } from '../models/job.model';
import { Todo } from '../models/todo.model';

export const loadTodos = createAction('[Employer] [Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Employer] [Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosError = createAction(
  '[Employer] [Todos] Load Todos Error',
  props<{ error: HttpErrorResponse }>()
);

export const newTodoInserted = createAction(
  '[Employer] [Todos] New Todo Inserted',
  props<{ todo: string }>()
);

export const saveNewTodo = createAction('[Employer] [Todos] Save New Todo');

export const deleteTodo = createAction(
  '[Employer] [Todos] Delete Todo',
  props<{ id: number }>()
);

export const loadSelf = createAction('[Employer] [Account] Load Self');

export const loadSelfSuccess = createAction(
  '[Employer] [Account] Load Self Success',
  props<{ employer: Employer }>()
);

export const loadSelfError = createAction(
  '[Employer] [Account] Load Self Error',
  props<{ error: HttpErrorResponse }>()
);

export const newEmployerFirstNameInserted = createAction(
  '[Employer] [New Employer] Firstname Inserted',
  props<{ firstName: string }>()
);

export const newEmployerLastNameInserted = createAction(
  '[Employer] [New Employer] Lastname Inserted',
  props<{ lastName: string }>()
);

export const newEmployerEmailInserted = createAction(
  '[Employer] [New Employer] Email Inserted',
  props<{ email: string }>()
);

export const newEmployerPhoneInserted = createAction(
  '[Employer] [New Employer] Phone Inserted',
  props<{ phone: string }>()
);

export const newEmployerPasswordInserted = createAction(
  '[Employer] [New Employer] Password Inserted',
  props<{ password: string }>()
);

export const newEmployerSectionInserted = createAction(
  '[Employer] [New Employer] Section Inserted',
  props<{ section: string }>()
);

export const saveNewEmployer = createAction(
  '[Employer] [New Employer] Save New Employer'
);

export const saveNewEmployerSuccess = createAction(
  '[Employer] [New Employer] Save New Employer Success'
);

export const saveNewEmployerError = createAction(
  '[Employer] [New Employer] Save New Employer Error'
);

export const newJobTitleInserted = createAction(
  '[Employer] [New Job] Title Inserted',
  props<{ title: string }>()
);

export const newJobTypeInserted = createAction(
  '[Employer] [New Job] Type Inserted',
  props<{ typ: string }>()
);

export const newJobSectionInserted = createAction(
  '[Employer] [New Job] Section Inserted',
  props<{ section: string }>()
);

export const newJobDeadlineInserted = createAction(
  '[Employer] [New Job] Deadline Inserted',
  props<{ deadline: Date }>()
);

export const newJobStartDateInserted = createAction(
  '[Employer] [New Job] Start Date Inserted',
  props<{ startDate: Date }>()
);

export const newJobTemporaryInserted = createAction(
  '[Employer] [New Job] Temporary Inserted',
  props<{ temporary: boolean }>()
);

export const newJobEndDateInserted = createAction(
  '[Employer] [New Job] End Datte Inserted',
  props<{ endDate: Date }>()
);

export const newJobStreetInserted = createAction(
  '[Employer] [New Job] Street Inserted',
  props<{ street: string }>()
);

export const newJobNumberInserted = createAction(
  '[Employer] [New Job] Number Inserted',
  props<{ number: string }>()
);

export const newJobPlzInserted = createAction(
  '[Employer] [New Job] PLZ Inserted',
  props<{ plz: number }>()
);

export const newJobTownInserted = createAction(
  '[Employer] [New Job] Town Inserted',
  props<{ town: string }>()
);

export const newJobCountryInserted = createAction(
  '[Employer] [New Job] Country Inserted',
  props<{ country: string }>()
);

export const newJobShortDescriptionInserted = createAction(
  '[Employer] [New Job] Short Description Inserted',
  props<{ shortDescription: string }>()
);

export const newJobDescriptionInserted = createAction(
  '[Employer] [New Job] Description Inserted',
  props<{ description: string }>()
);

export const newJobVacationInserted = createAction(
  '[Employer] [New Job] Vacation Inserted',
  props<{ vacation: number }>()
);

export const newJobRemoteInserted = createAction(
  '[Employer] [New Job] Remote Inserted',
  props<{ remote: boolean }>()
);

export const newJobWageMonthInserted = createAction(
  '[Employer] [New Job] Wage Month Inserted',
  props<{ wageMonth: number }>()
);

export const newJobWageYearInserted = createAction(
  '[Employer] [New Job] Wage Year Inserted',
  props<{ wageYear: number }>()
);

export const newJobAdvantagesInserted = createAction(
  '[Employer] [New Job] Advantages Inserted',
  props<{ advantages: string }>()
);

export const saveNewJob = createAction('[Employer] [New Job] Safe New Job');

export const saveNewJobSuccess = createAction(
  '[Employer] [New Job] Safe New Job Success'
);

export const saveNewJobError = createAction(
  '[Employer] [New Job] Safe New Job Error'
);

export const loadCreatedJobs = createAction(
  '[Employer] [Jobs] Load Created Jobs'
);

export const loadCreatedJobsSuccess = createAction(
  '[Employer] [Jobs] Load Created Jobs Success',
  props<{ jobs: Job[] }>()
);

export const loadCreatedJobsError = createAction(
  '[Employer] [Jobs] Load Created Jobs Error',
  props<{ error: HttpErrorResponse }>()
);
