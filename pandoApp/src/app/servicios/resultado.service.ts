// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// import { Observable, BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ResultadoService {
//   private _votos = [];
//   private _$votoObservable: Observable<any>;
//   private _$votoObserver: new BehaviorSubject(this._votos);

// constructor(private socket: Socket) {
//   this.socket.on('opt', (data) => {
//     this._votos.push(data);
//     this.$votoObserver.next(this._votos);
//   });
// }

// sendVoto(opt){
//   this._votos.push(opt);
//   this.socket.emit('opt', opt);
// }

// getVotos(): Observable < any > {
//   this._votoObservable = this.$votoObserver.asObservable();
//   return this._votoObservable;
// }

