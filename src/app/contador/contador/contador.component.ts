import { Component } from '@angular/core'

@Component({
    selector : 'app-contador',
    template : `   
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong> {{ base }} </strong></h3>

    <button (click) = " sumar(); "> + 1</button>
    <span> {{ numero }} </span>
    <button (click) = " restar(); "> - 1</button>

    <button (click) = " acumular(base); "> + {{ base }}</button>
    <span> {{ numero2 }} </span>
    <button (click) = " acumular(-base); "> - {{ base }} </button>
    `
})

export class ContadorComponent {
    public titulo  : string = 'bases';
    public numero  : number = 10;
    public numero2 : number = 10;
    public base    : number = 5;
  
    sumar() {
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular( valor : number ){
      this.numero2 += valor;
    }
}