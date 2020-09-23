export class Random {

    private balls: number[];
    private outputMessage: string;

    constructor() {

    }

    public getOutputMessage(): string {
        return this.outputMessage;
    }

    public setOutputMessage(outputMessage: string): void {
        this.outputMessage = outputMessage;
    }

    public getballs(): number[] {
        return this.balls;
    }

    public setballs(balls: number[]): void {
        this.balls = balls;
    }

    public numberRandom() {
        let iteration = 0;
        this.balls.forEach(element => {
            this.balls[iteration] = Math.floor(Math.random() *10 +1);
            iteration++;
        });
    }

    public status(){
        let repetition = 0; let elementSearch = this.balls[0];
        let position = this.balls.indexOf(elementSearch);
        while (position != -1) {
            repetition++;
            position = this.balls.indexOf(elementSearch, position + 1);
        }
        
        if(repetition === this.balls.length)
            this.outputMessage = "FELICIDADES GANASTE";
        else
            this.outputMessage = "LO LAMENTO PERDISTE";
    }


}