const carMakers = ["ford", "toyota", "aston"];
const cam: string[][] = [["ford"], ["corolla"], ["martin"]];

const cart = carMakers[0];
const papi = cam[0];
const cincon = cam.pop();

const pip = cincon.map((item) => {
  return item;
});
//tuple

const propss = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Dring = [string, boolean, number];
const pepsim: Dring = ["brown", true, 40];
