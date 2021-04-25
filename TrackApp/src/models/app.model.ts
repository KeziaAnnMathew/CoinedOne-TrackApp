export class AppModel{
    constructor(
        public appname:string,
        public blocked:Boolean,
        public limit:Boolean,
        public limitWeekdays:number,
        public limitWeekend:number,
    ){

    }
}