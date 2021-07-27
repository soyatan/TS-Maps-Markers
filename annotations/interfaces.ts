interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: false,
  summary(): string {
    return this.name;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 50,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicle(drink);
