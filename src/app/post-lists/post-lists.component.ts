import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  posts!: any[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(result => {
      this.posts = result as any[];
    });
  }

}
