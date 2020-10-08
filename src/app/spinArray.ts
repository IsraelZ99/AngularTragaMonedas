import { interval } from 'rxjs'
import { take } from 'rxjs/operators';

import { environment } from "../environments/environment";

export class SpinArray {
    private iteration: number;
    private balls: number[];
    private pressRandom: number;
    private numberPress: number;

    public getBalls(): number[] {
        return this.balls;
    }

    public getPressRandom(): number {
        return this.pressRandom;
    }

    public setPressRandom(pressRandom: number): void {
        this.pressRandom = pressRandom;
    }

    public getNumberPress(): number {
        return this.numberPress;
    }

    public setNumberPress(numberPress: number): void {
        this.numberPress = numberPress;
    }
    public setBalls(balls: number[]): void {
        this.balls = balls;
    }

    public verifyPressButton(): boolean {
        //return (this.numberPress === 0) ? (false) : (true);
        if (this.numberPress === 0) {
            this.pressRandom = Math.floor(Math.random() * 10 + environment.probabilityWin);
            return false;
        } else if (this.pressRandom === this.numberPress)
            return true;
        else
            return false;
    }

    public insertCoin(): number {
        return environment.moneyMachine += environment.costMachine;
    }

    public spinNumbersOfArray(): void {
        const contador = interval(100);
        this.iteration = 1; const numberTake = 10;
        const iterationPipe = contador.pipe(take(numberTake));

        iterationPipe.subscribe(() => {
            if (this.pressRandom === this.numberPress) {
                if (this.iteration == numberTake) {
                    this.balls.forEach(element => { this.balls.splice(this.balls.indexOf(element), 1, environment.numberWin); });
                } else {
                    this.balls.forEach(element => { this.balls.splice(this.balls.indexOf(element), 1, Math.floor(Math.random() * 10 + 1)); });
                }
            } else {
                this.balls.forEach(element => { this.balls.splice(this.balls.indexOf(element), 1, Math.floor(Math.random() * 10 + 1)); });
            }
            this.iteration++;
        });
    }
}


let spinClass = new SpinArray();
let setB = spinClass.setBalls([]);
let getB = spinClass.getBalls();
let setP = spinClass.setNumberPress(1);
let getP = spinClass.getNumberPress();
let setPRandom = spinClass.setPressRandom(3);
let getPRandom = spinClass.getPressRandom();
let verify = spinClass.verifyPressButton();
let spin = spinClass.spinNumbersOfArray();