export class CalcNums {
  days!: number;
  hours!: number;
  minutes!: number;
  months!: number;
  seconds!: number;
  weeks!: number;
  years!: number;

  constructor(
    da: number,
    ho: number,
    mi: number,
    mo: number,
    se: number,
    we: number,
    ye: number
  ) {
    this.days = da;
    this.hours = ho;
    this.minutes = mi;
    this.months = mo;
    this.seconds = se;
    this.weeks = we;
    this.years = ye;
  }
}
