import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title :string = 'Registration Form';
name: string='';
email: string='';
address: string='';
password : string='';
showData:boolean=false;
ngOnInit() {
this.name='';
this.email='';
this.address='';
this.password='';
}
registerUser():void {
if(
this.name !== '' &&
this.email !== '' &&
this.address !== '' &&
this.password !== ''
){        
this.showData=true;
}
}
clear():void {
this.name='';
this.email='';
this.address='';
this.password='';
this.showData = false;
}
}
