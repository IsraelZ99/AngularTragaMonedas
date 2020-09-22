export class Aleatorio {

    private bolitas: number[];

    constructor() {

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


}

