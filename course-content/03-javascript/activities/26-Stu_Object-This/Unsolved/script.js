// Prints out the whole object of windows which contains the viewport and all the stuff
console.log(this);


// prints out object Windows concatonated to a string
function helloThis() {
  console.log('Inside this function, this is ' + this);
  console.log(this);
}


var child = {
  age: 10,
  age2: 28,
  ageTenYears: function () {
    console.log(this.age2 + 10);
    console.log(this.age2);
  },
};
child.ageTenYears();
child.ageTenYears();


var investor = {
  name: 'Cash Saver',
  initialInvestment2: 6000,
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.parent.initialInvestment2 * 1.15);
    },
  },
};

investor.investment.investmentGrowth();
