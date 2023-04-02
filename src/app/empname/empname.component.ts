import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-empname',
  templateUrl: './empname.component.html',
  styleUrls: ['./empname.component.css']
})
export class EmpnameComponent {
  empname="";
  observerempname:any;
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.empname= this.route.snapshot.params["empname"];
  
   this.route.paramMap.subscribe(params => {
    this.observerempname = params.get('empname');
    } );
}
}
