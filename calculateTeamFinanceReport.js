function calculateTeamFinanceReport(salaries, team) {
  // the implementation of your function here
  const report = {
    totalBudgetTeam: 0,
  };

  for (const member of team) {
    const { specialization } = member;
    if (!salaries[specialization]) {
      continue;
    }
    const { salary } = salaries[specialization];
    const tax = parseInt(salaries[specialization].tax) / 100; // процент налога

    const selaryGross = salary / (1 - tax); // зарплата до вычета налога
    console.log(selaryGross);
    report.totalBudgetTeam += selaryGross;

    if (!report[`totalBudget${specialization}`]) {
      report[`totalBudget${specialization}`] = selaryGross;
    } else {
      report[`totalBudget${specialization}`] += selaryGross;
    }
  }

  for (const key in report) {
    report[key] = Math.floor(report[key]);
  }
  return report;
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

const salaries2 = {
  TeamLead: { salary: 1000, tax: '99%' },
  Architect: { salary: 9000, tax: '34%' },
};
const team2 = [
  { name: 'Alexander', specialization: 'TeamLead' },
  { name: 'Gaudi', specialization: 'Architect' },
  { name: 'Koolhas', specialization: 'Architect' },
  { name: 'Foster', specialization: 'Architect' },
  { name: 'Napoleon', specialization: 'General' },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));
/* see in console
{"totalBudgetTeam":140909,"totalBudgetTeamLead":100000,"totalBudgetArchitect":40909}
*/
