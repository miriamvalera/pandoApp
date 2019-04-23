export class Usuario{
    
    constructor(
        public _id:number,
        public email: string,
        public pssw: string,
        public name: string,
        public imgPerfil: string
    ){        
    }
}