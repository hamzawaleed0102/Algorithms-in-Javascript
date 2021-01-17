function DHL() {
  this.calculate = () => {
    return 3.4;
  };
}

function TCS() {
  this.calculate = () => {
    return 4.5;
  };
}

// const dhl = new DHL();
// const tcs = new TCS();
// const d1 = dhl.calculate()
// const t1 = tcs.calculate()
//  instead of above duplicate .calculare() function. we're going to write a Shipping function (stratery pattern)

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };

  this.calculate = () => {
    return this.company.calculate();
  };
}

const dhl = new DHL();
const tcs = new TCS();

const shipping = new Shipping();
shipping.setStrategy(dhl);
const dhlFee = shipping.calculate();
console.log("DHL Fee: ", dhlFee);

shipping.setStrategy(tcs);
const tcsFee = shipping.calculate();
console.log("TCS Fee: ", tcsFee);
