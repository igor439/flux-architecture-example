import { Action, TodoObject } from "../actions/TodolistAction";

export interface stores{

    state:any;
    callbaks:any[];
    register(callBack: ()=>void): void;
    unregister(callBack: ()=>void): void;
    getState(): any;
    handleAction(action:Action): void;

}

export class TodoListStore implements stores{
    
    state: any[] = [];
    callbaks: any[] = [];

    public register(callBack: () => void): void {
        this.callbaks.push(callBack);
    }
    public unregister(callBack: ()=>void): void {

        var index:number = this.callbaks.indexOf(callBack);
        if (index > -1){
            this.callbaks.splice(index,1);
        }
        
    }
    public getState() {
        return this.state;
    }
    public handleAction(action: Action): void {
        switch (action.action) {
            case "ADD_TODO":
                const todoObject = {} as TodoObject;
                todoObject.id = action.data.id;
                todoObject.todoText = action.data.todoText;

                const newArray = [...this.state, todoObject];
                this.state = newArray;
        
                this.callbaks.forEach((callbak)=>{
                callbak();
              })
              break;

            default:
              break;
          }
    }

    
    
}




