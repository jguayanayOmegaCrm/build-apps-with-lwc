/**
 * @description       : 
 * @author            : Johnny A. Guayanay Troya
 * @group             : 
 * @last modified on  : 04-18-2022
 * @last modified by  : Johnny A. Guayanay Troya
**/
import { LightningElement } from 'lwc';
export default class HelloWebComponent extends LightningElement {
	greeting = 'BEAR';
    currentDate = new Date().toDateString();

    get capitalizedGreeting() {
	return `Hello ${this.greeting.toUpperCase()}!`;
    }
    get actualDate()
    {
        return`Hoy es ${this.currentDate}`;
    }
    //evento asociado en el html,cuando cambiamos el input de la pag el valor de la variable greeting se cambia
    handleGreetingChange(event) {
        this.greeting = event.target.value;

    }

    
}