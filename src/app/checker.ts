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

    public getMoneyWin(): number {
        return this.moneyWin;
    }

    public setBalls(balls: number[]): void {
        this.balls = balls;
    }

    public verifyStatusWinerLoser(): string {
        let repetition = 0; let elementSearch = this.balls[0];
        let msg = "";
        let position = this.balls.indexOf(elementSearch);
        while (position != -1) {
            position = this.balls.indexOf(elementSearch, position + 1);
            repetition += 1;
        }

        if (repetition === this.balls.length) {
            msg = "Felicidades, has ganado";
            this.moneyWin = this.generateMoneyBack();
            environment.moneyMachine -= this.moneyWin;
        } else {
            msg = "Lo siento has perdido";
        }
        return msg;
    }


    public generateMoneyBack(): number {
        let moneyRandomWin = 1;
        this.moneyInMachine = environment.moneyMachine;
        while (moneyRandomWin < this.moneyInMachine && moneyRandomWin > 0) {
            moneyRandomWin = Math.floor(Math.random() * this.moneyInMachine + 1);
            console.log("Vas a ganar: "+moneyRandomWin);
        }
        return moneyRandomWin;
    }

}

let checkerClass = new Checkers();
let getMoney = checkerClass.getMoneyWin();
let setBall = checkerClass.setBalls([]);
let verify = checkerClass.verifyStatusWinerLoser();
let moneyBack = checkerClass.generateMoneyBack();