let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", ''),

	if(typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" &&  a.length < 50 ){

		alert("Done");

		appData.expenses[a] = b;
	} else {
		alert("Error");
		i--;
	}
};

appData.moneyPerDay = appData.budget / 30;

alert("Ваш ежедневный бюджет: " + appData.moneyPerDay + " руб");

switch (appData.moneyPerDay) {
	case appData.moneyPerDay < 100:
		alert("У вас низкий уровень достатка");
		break;
	case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
		alert("У вас cредний уровень достатка");
		break;
	case appData.moneyPerDay > 2000:
		alert("У вас высокий уровень достатка");
		break;
	default:
		alert("Произошла неизвестная ошибка")
		break;
}
