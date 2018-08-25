import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../service/data-handler.service';
import {Post} from '../model/post';
import {Comment} from '../model/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Demo-app2';

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.getPosts().subscribe((posts: Post[]) => {
      if (posts && JSON.stringify(posts) !== JSON.stringify([])) {
        // console.log('posts:', posts);
      }
    });

    this.dataHandler.getComments().subscribe((comments: Comment[]) => {
      if (comments && JSON.stringify(comments) !== JSON.stringify([])) {
        // console.log('posts:', posts);
      }
    });
  }
}
