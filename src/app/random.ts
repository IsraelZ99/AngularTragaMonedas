import { environment, environmentClass } from '../environments/environment';

export class Random {

    private balls: number[];
    private outputMessage: string;
    private pressRandom: number;
    private numberPress: number;
    private iteration: number;
    private environmentMethod: environmentClass;
    private numberWin: number;

    constructor() {
        this.iteration = 0;
        this.environmentMethod = new environmentClass();
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
            this.pressRandom = this.environmentMethod.probabiltyWin();
        } else if (this.pressRandom === this.numberPress) {
            this.iteration = 0;
            this.numberWin = this.environmentMethod.generateNumberWin();
            while (this.iteration < this.balls.length) {
                this.balls[this.iteration] = this.numberWin;
                this.iteration++;
            }
            return true;
        }
    }
}
