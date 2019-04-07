var money = prompt("Ваш бюджет на месяц?", "30000 руб"),
	time = prompt("Введите дату в формате YYYY-MM-DD");


var expenses = prompt("Введите обязательную статью расходов в этом месяце",''),
	 HowMuch = prompt("Во скольок обойдется?",'');
var appData = {
	budget: money,
	timeData: time,
	expenses: {
	"expenses" : "HowMuch"},
	optionalExpenses:{
		
	},
	income:[],
	saving: false
};
var fullBudget = expenses / HowMuch;
alert(fullBudget);
