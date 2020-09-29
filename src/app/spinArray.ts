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
        if (this.numberPress === 0) {
            this.pressRandom = Math.floor(Math.random() * 10 + environment.probabilityWin);
        } else if (this.pressRandom === this.numberPress) {
            return true;
        }
    }

    public insertCoin() :number{
        return environment.moneyMachine += environment.costMachine;
    }

    public spinNumbersOfArray() {
        const contador = interval(100);
        this.iteration = 1; const numberTake = 10;
        const iterationPipe = contador.pipe(take(numberTake));

        iterationPipe.subscribe(n => {
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