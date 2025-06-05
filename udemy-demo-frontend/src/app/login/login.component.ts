import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../services/user-service';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Router } from '@angular/router';
import { TokenService } from '../services/token-service';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ProgressSpinnerModule,CommonModule,InputTextModule,ReactiveFormsModule,FloatLabelModule,ButtonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private tokenService:TokenService,private router: Router,private userService:UserService,private messageService:MessageService){}
  isLoading = false;
  loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  });



  onSubmit(){
    this.isLoading=true;
    this.loginForm.markAllAsTouched();
     if (this.loginForm.valid) {
    // Form is valid, process the data
    const formData = this.loginForm.value;
    console.log('Form Data:', formData);
    const {email,password} = formData
    if(email&&password){
      this.userService.login(email,password).subscribe({
        next:(response:any)=>{
          this.tokenService.saveToken(response.Token);
          this.messageService.add({ 
            severity: 'success', 
            summary: 'Login Successfully', 
        });
          this.router.navigate(['/home']);
        },
        error:(err)=>{
          console.log(err);
          this.messageService.add({ 
            severity: 'error', 
            summary: 'Failed to login', 
        });
        }
      });; 
    }
  
  } else {
      this.isLoading=false;
      console.log('Form is invalid');
      this.messageService.add({ 
            severity: 'error', 
            summary: 'Failed to add', 
        });
  }
   this.isLoading=false;

  }
}
