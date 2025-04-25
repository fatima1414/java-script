// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   let year = 2025;
//   if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }
    // function isLeapYear(year) {
    //   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    // }

    // function checkLeapYear() {
    //   const year = document.getElementById("yearInput").value;
    //   const result = document.getElementById("result");

    //   if (year === "") {
    //     result.textContent = "Please enter a year.";
    //     return;
    //   }

    //   if (isLeapYear(Number(year))) {
    //     result.textContent = year + " is a leap year.";
    //   } else {
    //     result.textContent = year + " is not a leap year.";
    //   }
    // }

    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function checkLeapYear() {
      const year = document.getElementById("yearInput").value;
      const result = document.getElementById("result");

      if (year === "") {
        result.textContent = "Please enter a year!";
        return;
      }

      if (isLeapYear(Number(year))) {
        result.textContent = year + " is a Leap Year! 🎉";
      } else {
        result.textContent = year + " is NOT a Leap Year.";
      }
    }