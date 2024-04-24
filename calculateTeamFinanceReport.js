function calculateTeamFinanceReport(salaries, team) {
  // the implementation of your function here
  const result = {
    totalBudgetTeam: 0,
  };
  for (const member of team) {
    const { specialization } = member;
    const { salary } = salaries[specialization];
    console.log(salary);
  }
  return result;
}

const salaries1 = {
  Manager: { salary: 1000, tax: '10%' },
  Designer: { salary: 600, tax: '30%' },
  Artist: { salary: 1500, tax: '15%' },
};

const team1 = [
  { name: 'Misha', specialization: 'Manager' },
  { name: 'Max', specialization: 'Designer' },
  { name: 'Vova', specialization: 'Designer' },
  { name: 'Leo', specialization: 'Artist' },
];

const financeReport1 = calculateTeamFinanceReport(salaries1, team1);

console.log(JSON.stringify(financeReport1));

/* see in console
{
  "totalBudgetTeam":4590, // total budget does not match the sum of specializations due to truncation of the fractional part
  "totalBudgetManager":1111,
  "totalBudgetDesigner":1714,
  "totalBudgetArtist":1764,
}
*/
