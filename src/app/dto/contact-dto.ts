import { getNgModuleById } from "@angular/core";
import { Guid } from "guid-typescript";

export class ContactDto{
    constructor( 
        public name:string = '',
        public phoneNumber:string = '',
        public eMail:string = '',
        public id = Guid.create().toString()
    ){

    }
}