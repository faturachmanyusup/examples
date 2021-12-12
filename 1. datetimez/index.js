// import as a function
const date = require('datetimez').default;

const foo = date()
console.log(foo);

const tomorrow = foo.addDate(1);
console.log(tomorrow.format('dddd, DD MMM YYYY'), '<<< TOMORROW');

// import DateTimez Class
const { DateTimez } = require('datetimez');
const bar = new DateTimez();
console.log(bar);

const lastMonth = bar.subtractMonth(1);
console.log(lastMonth.format('dddd, DD MMM YYYY'), '<<< LAST MONTH');
