import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../services/user-service';
import { MessageService } from 'primeng/api';
import { User } from "../intercace/user";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [ProgressSpinnerModule,CommonModule,InputTextModule,ReactiveFormsModule,FloatLabelModule,ButtonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private userService:UserService,private messageService:MessageService){}
  isLoading = false;
  signupForm = new FormGroup({
      firstName : new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName : new FormControl('', [Validators.required, Validators.minLength(3)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  });



  onSubmit(){
    this.isLoading=true;
    this.signupForm.markAllAsTouched();
     if (this.signupForm.valid) {
    // Form is valid, process the data
    const formData = this.signupForm.value;
    console.log('Form Data:', formData);
    const {firstName,lastName,email,password} = formData
    if(firstName&&lastName&&email&&password){
      this.userService.signUp({firstName,lastName,password,email}).subscribe({
        next:()=>{
          this.messageService.add({ 
            severity: 'success', 
            summary: 'User created', 
        });
        },
        complete:()=>{
          this.isLoading=false;
        },
        error:()=>{
          this.isLoading=false;
          this.messageService.add({ 
            severity: 'error', 
            summary: 'Failed to add', 
        });
        },
      });  
    }
   

  } else {
     this.isLoading=false;
    console.log('Form is invalid');
    this.messageService.add({ 
            severity: 'error', 
            summary: 'Failed to add', 
        });
  }

  }
  

}
