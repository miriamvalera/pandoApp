import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Observable, Subscription } from 'rxjs';
import { Mensage } from 'src/app/modelos/mensaje';
import { ActivatedRoute } from '@angular/router';
//import { startWith } from 'rxjs/operators';

@Component({
  selector: 'conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.scss']
})
export class ConversacionComponent implements OnInit {

  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  msgtxt = '';
  username = null;
  userid = null;
  losmsgs = null;

  constructor(private _chatService: ChatService, private _route: ActivatedRoute) { }

  ngOnInit() {


    this._route.params.subscribe(parametros => {
      this.userid = parseInt(parametros.id);
      console.log("parametros", parametros.id);
      return this.userid;
      //console.log("this.username", this.username);
    });

   this._chatService.getUsuariosChatAPI().subscribe(dat => {
     console.log("data.id ", dat);

        for(let i=0; i< dat.length;i++){
          if (dat[i].id == this.userid) {
            this.username = dat[i].name;
            console.log("found", dat[i].name);
          }
        }
    });   

    this._chatService.getMensajes().subscribe(data => {
      this.losmsgs = data;
    });


  }

  ngOnDestroy() {
  }

  envia() {
    console.log("usernameeee", this.username);
    this._chatService.sendMess({ user: this.username, txt: this.msgtxt });
  }
}