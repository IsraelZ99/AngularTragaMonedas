import { environment } from "../environments/environment";

export class Checkers {
    private balls: number[];
    private moneyWin: number;
    private moneyInMachine: number;
    
    constructor(){
        this.moneyInMachine = environment.moneyMachine;
    }

    public getMoneyWin(): number {
        return this.moneyWin;
    }

    public setBalls(balls: number[]): void {
        this.balls = balls;
    }

    public verifyStatusWinerLoser(): string {
        let repetition = 0; let elementSearch = this.balls[0];
        let position = this.balls.indexOf(elementSearch);
        while (position != -1) {
            repetition++;
            position = this.balls.indexOf(elementSearch, position + 1);
        }

        if (repetition === this.balls.length) {
            this.moneyWin = this.generateMoneyBack();
            environment.moneyMachine -= this.moneyWin;
            return "Felicidades, has ganado";
        }

        else {
            environment.moneyMachine += environment.costMachine;
            return "Lo siento has perdido";

        }
    }

    public generateMoneyBack(): number {
        let moneyRandomWin = 0;
        while (moneyRandomWin < this.moneyInMachine) {
            moneyRandomWin = Math.floor(Math.random() * this.moneyInMachine + 1);
        }
        return moneyRandomWin;
    }



}