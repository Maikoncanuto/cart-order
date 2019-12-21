import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  basicForm: FormGroup;

  users$: Observable<User[]>;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.users$ = userService.entities$;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.basicForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
    })
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  create() {
    console.log(this.basicForm.value);
    //this.userService.add(user);
  }

}
