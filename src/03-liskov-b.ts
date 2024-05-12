export abstract class Car {
  constructor() {}

  abstract getNumberOfSeats(): number;
}

export class Tesla implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Volvo implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
