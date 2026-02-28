import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ){}

  form=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });

  submit(){
    if(this.form.invalid)return;

    this.authService.register(this.form.value);
    alert('registration successful');

    this.router.navigate(['/login'])
  }

}
