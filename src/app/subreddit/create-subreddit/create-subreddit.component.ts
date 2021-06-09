import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {

  

  createSubredditForm: FormGroup;  

  subredditModel: SubredditModel;
  

  constructor(private router: Router, private subredditService: SubredditService) {

    this.subredditModel = {
      name: '',
      description: ''
    };

  }

  ngOnInit(): void {

    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });


  }

  discard(){
    this.router.navigateByUrl('/');
  }

  createSubreddit(){

    this.subredditModel.name = this.createSubredditForm.get('title')?.value;
    this.subredditModel.description = this.createSubredditForm.get('description')?.value;

    this.subredditService.createSubreddit(this.subredditModel)
      .subscribe( 
        
        data => { this.router.navigateByUrl('list-subreddits'); } ,

        error => { throwError (error); });

  }

}



