import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Results } from '../interfaces/results';
import { Data } from '@angular/router';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css'],
})
export class ResultsViewComponent implements OnInit {
  posts: any;
  constructor(private service: RedditService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((response) => {
      this.posts = response.data.children;
      console.log(this.posts);
    });
  }
}
