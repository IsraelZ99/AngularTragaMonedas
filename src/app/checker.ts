import { environment } from "../environments/environment";

export class Checkers {
    private balls: number[];
    private moneyWin: number;
    private winner: boolean;
    private loser: boolean;


    public isWinner(): boolean {
        return this.winner;
    }

    public setWinner(winner: boolean): void {
        this.winner = winner;
    }

    public isLoser(): boolean {
        return this.loser;
    }

    public setLoser(loser: boolean): void {
        this.loser = loser;
    }

    public getBalls(): number[] {
        return this.balls;
    }

    public setBalls(balls: number[]): void {
        this.balls = balls;
    }
    

    public verifyStatusWinerLoser() :string {
        let repetition = 0; let elementSearch = this.balls[0];
        let position = this.balls.indexOf(elementSearch);
        while (position != -1) {
            repetition++;
            position = this.balls.indexOf(elementSearch, position + 1);
        }

        if (repetition === this.balls.length) {
            this.moneyWin = this.verifyMoneyBack();
            return "Felicidades, has ganado";
            this.winner = true;
            environment.moneyMachine -= this.moneyWin;
        }
        else {
            return "Lo siento Has perdido";
            environment.moneyMachine += environment.costMachine;
        }
    }

    public verifyMoneyBack(): number {
        let moneyInMachine = environment.moneyMachine;
        return Math.floor(Math.random() * moneyInMachine + 1);
    }



}