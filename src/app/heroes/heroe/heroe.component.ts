import { Component } from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    public nombre : string = 'IronMan';
    public edad : number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarHeroe():void{
        this.nombre = "Spiderman";
    }

    cambiarEdad():void{
        this.edad = 30;
    }
}