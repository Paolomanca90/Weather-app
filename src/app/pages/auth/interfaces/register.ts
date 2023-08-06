import { IApiresp } from "./apiresp";

export interface IRegister {
  nome:string;
  cognome:string;
  email:string;
  password:string;
  confermaPassword:string;
  username:string;
  genere:string;
  preferiti?:IApiresp[]
}
