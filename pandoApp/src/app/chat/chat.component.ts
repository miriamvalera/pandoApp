import { Component, OnInit } from '@angular/core';
import { Chat } from '../modelos/chat';
import { ChatService } from '../servicios/chat.service';
import { ContactosService } from '../servicios/contactos.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // chats:Chat[] = [
  //   new Chat(0,'jjkajjlk' ),
  //   new Chat(1,'jjkajjlk' ),
  // ];

  conversaciones = null;
  idOrig = null;
  idDest = null;
  nombreDestino = [];


  constructor(private _chatServ: ChatService, private _contactosServ: ContactosService) { }

  ngOnInit() {
    this._chatServ.getUsuariosChatAPI().subscribe(chatsDelServ => {
      //console.log("chatsDelServ",chatsDelServ);
      this.conversaciones = chatsDelServ;
    });

    this._contactosServ.getUsuariosAPI().subscribe(dat => {
      console.log("usuariosDelServ", dat);

      //console.log("foundB", this.conversaciones.length);
      for (let i = 0; i < this.conversaciones.length; i++) {
        
        //console.log("found1", this.conversaciones[i].idDest);
        for (let u = 0; u < dat.length; u++) {
          //console.log("found2", dat[u]._id);
          if (dat[u]._id == this.conversaciones[i].idDest) {
            this.nombreDestino.push(dat[u].name);
            console.log("found", this.nombreDestino);
          }
        }
      }
    });

  }

  // getUsuarioById(uid){
  //   if(this.usuarios) return this.usuarios.find(unU => unU.id===uid);
  // }


}
