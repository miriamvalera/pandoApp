import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Subscription } from 'rxjs';
import { Mensage } from 'src/app/modelos/mensaje';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.scss']
})
  export class ConversacionComponent implements OnInit, OnDestroy {
    document: Mensage;
    private _docSub: Subscription;
    constructor(private _chatServ: ChatService) { }
  
    ngOnInit() {
      this._docSub = this._chatServ.currentDocument.pipe(
        startWith({ 
          idMsg: 1, 
          idOrig: 2,
          idDest: 3,
          texto: '',
          msgHora: ''
        })
      ).subscribe(document =>{ 
        console.log( "this.document",  this.document);
        console.log(" document ", document);
      });
    }
  
    ngOnDestroy() {
      this._docSub.unsubscribe();
    }
  
    editDoc() {
      console.log(this.document);
      this._chatServ.editDocument(this.document);
    }
  }