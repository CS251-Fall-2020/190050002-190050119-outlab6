import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray,
  FormBuilder
} from "@angular/forms";
import { FormSendService } from '../form-send.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { UserModel } from "./userModel";
//import { UserService } from "./user.service";
//import { DuplicateEmailCheck } from "../utility/duplicateEmailCheck";

  //declaring our form variable
export interface User {
  name: string;
  email: string;
  feedback: string;
  comment: string;
}

export class data {
  name: string;
  email: string;
  feedback: string;
  comment: string;

  constructor() { 
  }
}


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})

export class FormComponentComponent implements OnInit {
  signupForm: FormGroup;
  initial: User;
  dataIn = new data;
  dataPost: string;


  constructor(private formSendService: FormSendService) { }

  ngOnInit() {
    
    this.signupForm = new FormGroup({
      user_name: new FormControl('your name'),
      user_email: new FormControl('your email'),
      feedback: new FormControl('Great'),
      comments: new FormControl('Give your comments'),
    });
    this.getFormdata();
    this.signupForm.valueChanges.subscribe(
      data => {
        //console.log(JSON.stringify(data));
        this.dataIn.name = data.name;
        this.dataIn.email = data.email;
        this.dataIn.feedback = data.feedback;
        this.dataIn.comment = data.comment;
        
      }
    )
    
  }
  

  onSubmit() {
    this.dataIn.name = this.signupForm.get('user_name').value;
    this.dataIn.email = this.signupForm.get('user_email').value;
    this.dataIn.feedback = this.signupForm.get('feedback').value;
    this.dataIn.comment = this.signupForm.get('comments').value;


    this.formSendService.postFormdata(this.dataIn).subscribe(
        response => {
        console.log(response);

        this.dataPost = JSON.stringify(response);
        alert("Submission Successful! ^_^ \nHere's what we received from you: \n"+this.dataPost);

      },
      err => {
        console.log(err);
        //console.log("Error!!!");
        console.warn(err.responseText);
        alert("Oh no! Submission unsuccessful :(!");
      },
      () => {
        //console.log('done uploading');       
      }
    );
    }

    getFormdata() {
      this.formSendService.getFormdata().subscribe(
        (data: User) => {
          this.initial = {
          name: (data as any).name,
          email: (data as any).email,
          feedback: (data as any).feedback,
          comment: (data as any).comment,
          }
          this.signupForm.patchValue({
            user_name: (data as any).name,
            user_email: (data as any).email,
            feedback: (data as any).feedback,
            comments: (data as any).comment,
          });
          //console.log(data as any);
        },
        err => console.log(err),
        () => {
          //console.log('done loading');
          //console.log(this.initial);
          
        }
      );
    }

    
  get email() { return this.signupForm.get('user_email').value; }
  get name() { return this.signupForm.get('user_name').value; }
  get feedback() { return this.signupForm.get('feedback').value; }
  get comment() { return this.signupForm.get('comments').value; }
    
  }
    


