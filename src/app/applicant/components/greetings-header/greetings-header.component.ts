import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings-header',
  templateUrl: './greetings-header.component.html',
  styleUrls: ['./greetings-header.component.scss'],
})
export class GreetingsHeaderComponent implements OnInit {
  @Input() amoutOfApplicaions: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
