import { environment } from '../environments/environment';
import { interval, timer } from 'rxjs'
import { take } from 'rxjs/operators';
import { env } from 'process';

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

        if (repetition === this.balls.length) {
            this.moneyWin = this.moneyBack();
            this.outputMessage = "FELICIDADES GANASTE";
            environment.moneyMachine -= this.moneyWin;
        }
        else {
            this.outputMessage = "LO LAMENTO PERDISTE";
            environment.moneyMachine += environment.costMachine;
        }
    }

    public verifyNumbersWin(): boolean {
        if (this.numberPress === 0) {
            this.pressRandom = Math.floor(Math.random() * 10 + environment.probabilityWin);
        } else if (this.pressRandom === this.numberPress) {
            this.balls.forEach(element => {
                this.balls.splice(this.balls.indexOf(element), 1, environment.numberWin);
            });
            return true;
        }
    }

    public moneyBack(): number {
        let moneyInMachine = environment.moneyMachine;
        return Math.floor(Math.random() * moneyInMachine + 1);
    }

    public spin() {
        const contador = interval(100);
        this.iteration = 1; const numberTake = 10;
        const iteration = contador.pipe(take(numberTake));

        iteration.subscribe(n => {
            this.balls.forEach(element => {
                if (this.pressRandom === this.numberPress) {
                    if (this.iteration == numberTake) {
                        this.balls.splice(this.balls.indexOf(element), 1, environment.numberWin);
                    } else {
                        this.balls.splice(this.balls.indexOf(element), 1, Math.floor(Math.random() * 10 + 1));
                    }
                } else {
                    this.balls.splice(this.balls.indexOf(element), 1, Math.floor(Math.random() * 10 + 1));
                }
            });
            this.iteration++;
        });

    }

}
