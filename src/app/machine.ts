import { environment } from '../environments/environment';
import { interval } from 'rxjs'
import { take } from 'rxjs/operators';

export class Machine {

    private balls: number[];
    private outputMessage: string;
    private pressRandom: number;
    private numberPress: number;
    private iteration: number;
    private moneyWin:number;

    constructor() {
        this.iteration = 0;
    }

    public getPressRandom(): number {
        return this.pressRandom;
    }

    public setPressRandom(pressRandom: number): void {
        this.pressRandom = pressRandom;
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

    public getMoneyWin(): number {
        return this.moneyWin;
    }

    public verifyPressButton(): boolean {
        if (this.numberPress === 0) {
            this.pressRandom = Math.floor(Math.random() * 10 + environment.probabilityWin);
            console.log("Para ganar pulsa: "+this.pressRandom);
        } else if (this.pressRandom === this.numberPress) {
            return true;
        }
    }


    public generateMoneyBack(): number {
        let moneyInMachine = environment.moneyMachine;
        return Math.floor(Math.random() * moneyInMachine + 1);
    }

    public verifyStatusWinnerLoser() {
        //if(! spinRun)
        let repetition = 0; let elementSearch = this.balls[0];
        let position = this.balls.indexOf(elementSearch);
        while (position != -1) {
            repetition++;
            position = this.balls.indexOf(elementSearch, position + 1);
        }

        if (repetition === this.balls.length) {
            this.moneyWin = this.generateMoneyBack();
            this.outputMessage = "FELICIDADES GANASTE";
            environment.moneyMachine -= this.moneyWin;
        }
        else {
            this.outputMessage = "LO LAMENTO PERDISTE";
            environment.moneyMachine += environment.costMachine;
        }
    }

}
