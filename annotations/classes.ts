class Vehicle {
  public drive(): void {
    console.log("CHUC");
  }
  color: string;
  year: Date;
  constructor(color: string, year: Date) {
    this.color = color;
    this.year = year;
  }
}

const vehicle = new Vehicle();

vehicle.drive();

class Cart extends Vehicle {
  public crash(): number {
    return 3;
  }
drive(): void {
    console.log("PHIEEU");
  }
  startDriving(): void {
    this.drive();
  }
}

const tototo = new Cart("yellow",Date now());
tototo.startDriving();
