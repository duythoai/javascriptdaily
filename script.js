"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//
const flightList = flights.split("+");
flightList.forEach((element, index) => {
  // console.log(`Chuyến bay ${index}: ${element}`);
  // console.log(element.split(";"));
  const [status, from, to, time] = element.split(";");
  // console.log(status);
  // console.log(from);
  // console.log(to);
  // console.log(time);
  console.log(
    `${status.startsWith("_Delayed") ? "🔴" : ""}${status.replaceAll(
      "_",
      " "
    )} from ${from.slice(0, 3).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} (${time.replace(":", "h")})`.padStart(51, "+")
  );
});
