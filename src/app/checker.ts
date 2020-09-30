import { environment } from "../environments/environment";
import { DataService } from './services/data.service';

export class Checkers {
    private balls: number[];
    private moneyWin: number;
    private moneyInMachine: number;
    private numberFlagPlayVideogame: number;
    private flagPlayVideogame: boolean;

    constructor(private dataService: DataService) {
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
            return "Lo siento has perdido";
        }
    }


    public generateMoneyBack(): number {
        let moneyRandomWin = 1;
        while (moneyRandomWin < this.moneyInMachine && moneyRandomWin > 0) {
            moneyRandomWin = Math.floor(Math.random() * this.moneyInMachine + 1);
        }
        return moneyRandomWin;
    }

    public checkCredits() {
        this.dataService.boughtCredits.subscribe(money => {
            this.numberFlagPlayVideogame = (isNaN(money) || money === 0) ? (0) : (money);
        });
    }

    public check2(): boolean {
        this.checkCredits();
        console.log("numberflag = "+this.numberFlagPlayVideogame);
        if (isNaN(this.numberFlagPlayVideogame)) {
            return true;
        } else {
            console.log("La maquina tiene " + this.numberFlagPlayVideogame);
            return false;
        }
    }

}