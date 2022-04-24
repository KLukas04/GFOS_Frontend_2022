import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TUI_DEFAULT_MATCHER, tuiPure } from '@taiga-ui/cdk';

const employees: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CreateDepartmentComponent {

  search = '';

  readonly control = new FormControl([employees[0]]);

  @tuiPure
  filter(search: string | null): readonly string[] {
    return employees.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
}
