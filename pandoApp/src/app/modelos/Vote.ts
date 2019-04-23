export class Vote {
	constructor(
		public _id: number,
		public tVotacion: string,
		public opcionVot: string[],
		public descVot: string
	) {
	}
}
