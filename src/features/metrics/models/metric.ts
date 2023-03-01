export class Metric {
    id: string;
    code: string;
    amounts: number[] | null;
    date: Date;

    constructor(id: string, code: string, amounts: number[] | null, date: Date) {
        this.id = id;
        this.code = code;
        this.amounts = amounts;
        this.date = date;
    }
}