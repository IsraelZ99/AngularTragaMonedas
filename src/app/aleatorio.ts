export class Aleatorio {

    private bolitas: number[];
    private outputMessage: string;

    constructor() {

    }

    public getOutputMessage(): string {
        return this.outputMessage;
    }

    public setOutputMessage(outputMessage: string): void {
        this.outputMessage = outputMessage;
    }

    public getBolitas(): number[] {
        return this.bolitas;
    }

    public setBolitas(bolitas: number[]): void {
        this.bolitas = bolitas;
    }

    public numeroAleatorio() {
        let iteracion = 0;
        this.bolitas.forEach(element => {
            this.bolitas[iteracion] = Math.floor(Math.random() *10 +1);
            iteracion++;
        });
    }

    public status(){
        let repeticion = 0; let elementSearch = this.bolitas[0];
        let posicion = this.bolitas.indexOf(elementSearch);
        while (posicion != -1) {
            repeticion++;
            posicion = this.bolitas.indexOf(elementSearch, posicion + 1);
        }
        
        if(repeticion === this.bolitas.length)
            this.outputMessage = "FELICIDADES GANASTE";
        else
            this.outputMessage = "LO LAMENTO PERDISTE";
    }


}