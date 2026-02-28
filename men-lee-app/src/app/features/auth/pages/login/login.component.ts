import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error='';

  constructor(
    private fb:FormBuilder,
    private authServicce:AuthService,
    private router:Router,
    private toastr:ToastrService
  ){}

  form=this.fb.group({

    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });

  submit(){
    if(this.form.invalid)return;

    const success=this.authServicce.login(this.form.value);
    
     if (success) {
    this.toastr.success('Login Successful ✅');
    this.router.navigate(['/products']);
  } else {
    this.toastr.error('Invalid Credentials ❌');
  }
  }
logout() {
  this.authServicce.logout();
}


}

