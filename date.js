const timeNow = new Date();
console.log("Date() --> ", timeNow)

const date = new Date("2022-02-09");
console.log(date);

const date1 = new Date("2022-02");
console.log(date1);

const date2 = new Date("2022");
console.log(date2);

const date3 = new Date("2020-07-01T12:00:00Z");
console.log(date3);

const date4 = new Date("03/25/2015");
console.log("date 4 ---> ", date4);

const time1 = new Date(2020, 1, 20, 4, 12, 11, 0);
console.log(time1)

const time = new Date;
const getdate = time.getDate();
console.log("date -> ", getdate);

const year = time.getFullYear();
console.log("year -> ", year);

const month = time.getMonth()
console.log("month -> ", month)

const day = time.getDay()
console.log("day -> ", day)

const hour = time.getHours()
console.log("hour -> ", hour)

const minute = time.getMinutes()
console.log("minute -> ", minute)

const utcDate = time.getUTCDate();
console.log("utcdate -> ", utcDate);

const event = new Date('Feb 19, 2020 23:15:30');
// set the date
event.setDate(15);
console.log("set date", event.getDate());

// Only 28 days in February!
event.setDate(35);

console.log(event.getDate()); // 6