import TaskInterface from "../interfaces/myTask.js";

class taskClass implements TaskInterface{
    Tasktitle: string
    Image:string
    date: string
    id:number
    constructor(Tasktitle:string,Image:string,date:string){
        this.Tasktitle=Tasktitle
        this.Image=Image
        this.date=date
        this.id=this.generateId()
    }
    generateId(){
        return Math.floor(Math.random()*10000)
    }
}

export default taskClass