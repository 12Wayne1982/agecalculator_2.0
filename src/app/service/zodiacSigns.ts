export class ZodiacSigns {
  zodiacDesc!: string;
  zodiacTitle!: string;

  constructor(zD: string, zT: string) {
    this.zodiacDesc = zD;
    this.zodiacTitle = zT;
  }
}
