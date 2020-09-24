import { environment } from '../environments/environment';

export class Random {

    private balls: number[];
    private outputMessage: string;
    private pressRandom: number;
    private numberPress: number;
    private iteration: number;
    private numberWin: number;

    constructor() {
        this.iteration = 0;
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

    public setNumberPress(numberPress: number): void {
        this.numberPress = numberPress;
    }

    public numberRandom() {
        this.iteration = 0;
        this.balls.forEach(element => {
            this.balls[this.iteration] = Math.floor(Math.random() * 10 + 1);
            this.iteration++;
        });
    }

    public status() {
        let repetition = 0; let elementSearch = this.balls[0];
        let position = this.balls.indexOf(elementSearch);
        while (position != -1) {
            repetition++;
            position = this.balls.indexOf(elementSearch, position + 1);
        }

        if (repetition === this.balls.length)
            this.outputMessage = "FELICIDADES GANASTE";
        else
            this.outputMessage = "LO LAMENTO PERDISTE";
    }

    public verifyNumbersWin(): boolean {
        if (this.numberPress === 0) {
            this.pressRandom = Math.floor(Math.random()*10 + environment.probabilityWin);
        } else if (this.pressRandom === this.numberPress) {
            this.balls.forEach(element => {
                this.balls.splice(this.balls.indexOf(element),1, environment.numberWin);
            });
            return true;
        }
    }
}
