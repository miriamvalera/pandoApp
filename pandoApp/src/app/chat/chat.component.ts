import { Component, OnInit } from '@angular/core';
import { Chat } from '../modelos/chat';
import { ChatService } from '../servicios/chat.service';

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


  constructor(private _chatServ: ChatService) { }

  ngOnInit() {
    this._chatServ.getUsuariosChatAPI().subscribe( chatsDelServ => {
      this.conversaciones = chatsDelServ;
    });

  }

  // getUsuarioById(uid){
  //   if(this.usuarios) return this.usuarios.find(unU => unU.id===uid);
  // }
 

}
