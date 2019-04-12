import { Component, OnInit } from '@angular/core';
import { Chat } from '../modelos/chat';
import { ContactosService } from '../servicios/contactos.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
   
  chats:Chat[] = [
    new Chat(0,[1,5,9] ),
    new Chat(1,[10,50,90] ),
  ];

  usuarios = null;


  constructor(private _contactosServ: ContactosService) { }

  ngOnInit() {
    this._contactosServ.getUsuariosAPI().subscribe( usuariosDelServ => {
      this.usuarios = usuariosDelServ;
    });

  }

  getUsuarioById(uid){
    if(this.usuarios) return this.usuarios.find(unU => unU.id===uid);
  }
 

}
