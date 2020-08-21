import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-result-view',
  templateUrl: './single-result-view.component.html',
  styleUrls: ['./single-result-view.component.css'],
})
export class SingleResultViewComponent implements OnInit {
  @Input() p;
  constructor() {}

  ngOnInit(): void {}
}
