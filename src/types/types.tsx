export interface IAddress{
 street :string,
 city:string;

}


export interface Iuser {
    id:number,
    name:string,
    email:string,
    address:IAddress

}
export interface ITodo {
    id:number,
    title:string,
    completed:boolean,
}