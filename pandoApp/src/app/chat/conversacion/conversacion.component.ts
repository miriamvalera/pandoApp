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
export class ConversacionComponent implements OnInit, OnDestroy {

  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  msgtxt = '';
  username = 0;
  losmsgs = null;

  constructor(private _chatService: ChatService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe(parametros => {
      this.username = parseInt(parametros.id);
      console.log("parametros", parametros.id);
      //console.log("this.username", this.username);
    });
    var found = function (data) {
      if (data !== undefined && this.username !== undefined) {
        data.find(function (element) {
          console.log("found", element.name);
          if (data.id === this.username) {
            return element.name;
          }
        });
      }

    }
    this._chatService.getMensajes().subscribe(data => {
      this.losmsgs = data;
    });
    this._chatService.getUsuariosChatAPI().subscribe(dat => {
      console.log("data.id ", dat)
      found(dat);
    });

  }

  ngOnDestroy() {
  }

  envia() {
    console.log("usernameeee", this.username);
    this._chatService.sendMess({ user: this.username, txt: this.msgtxt });
  }
}