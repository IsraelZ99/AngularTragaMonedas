import { environment } from "../environments/environment";

export class Checkers {
    private balls: number[];
    private moneyWin: number;
    private moneyInMachine: number;
    public creditsToEnter: number;
    public buttonInsertCreditStatu: boolean;
    public numberPressInsertCoin: number;
    public getCreditsToEnter: number;

    constructor() {
        this.moneyInMachine = environment.moneyMachine;
        this.balls = [];
        this.moneyWin = 0;
        this.creditsToEnter = 0;
        this.buttonInsertCreditStatu = false;
        this.numberPressInsertCoin = 0;
        this.getCreditsToEnter = 0;
    }

    get gCreditsEnter(): number {
        return this.creditsToEnter;
    }

    get gMoneyWin(): number {
        return this.moneyWin;
    }

    set sBalls(balls:number[]) {
        this.balls = balls;
    }

    

    verifyStatusWinerLoser(): string {
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
            return "Lo siento has perdido";
        }
    }


    generateMoneyBack(): number {
        let moneyRandomWin = 1;
        while (moneyRandomWin < this.moneyInMachine && moneyRandomWin > 0) {
            moneyRandomWin = Math.floor(Math.random() * this.moneyInMachine + 1);
        }
        return moneyRandomWin;
    }

}