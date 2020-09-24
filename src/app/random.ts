export class Random {

    private balls: number[];
    private outputMessage: string;
    private pressRandom: number;
    private numberPress: number;

    constructor() {

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
        let iteration = 0;
        this.balls.forEach(element => {
            this.balls[iteration] = Math.floor(Math.random() * 10 + 1);
            iteration++;
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

    public posibilityWin(): number {
        return this.pressRandom = Math.floor(Math.random() * 15 + 5);
    }

    public numbersWin(): boolean {
        if (this.numberPress === 0) {
            this.posibilityWin();
            return false;
        } else {
            if (this.pressRandom === this.numberPress) {
                let numberWin = Math.floor(Math.random() * 10 + 1);
                let iteration = 0;
                this.balls.forEach(element => {
                    this.balls[iteration] = numberWin;
                    iteration++;
                });
                this.numberPress = 0;
                return true;
            }
        }
    }


}