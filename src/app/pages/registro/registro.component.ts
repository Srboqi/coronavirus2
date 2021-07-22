import { Component, Input, OnInit, Output } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  
})


export class RegistroComponent implements OnInit {
  dep: any;
  constructor(private url: string, public json: JsonService ){

  }
  ngOnInit(): void {
    this.json.getJSON().subscribe((data:any)=>{
      this.dep=data;
    })
  }

}

