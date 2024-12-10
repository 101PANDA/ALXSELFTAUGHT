export default function getBudgetObject(income, gdp, capita) {
    const budget = {
        income,
        gdp,
        capita,
    };
  
    return budget;
}

const newBudget = getBudgetObject(5000, 89, 2500);
console.log(newBudget.capita)