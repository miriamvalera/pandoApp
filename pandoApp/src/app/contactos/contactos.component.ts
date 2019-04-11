import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
  
  contactos = null;


  constructor(private _) { }

  ngOnInit() {
    this.AppServe.geAppAPI().subscribe((data)=>{
      this.contacto = data;
    });
  }

}
