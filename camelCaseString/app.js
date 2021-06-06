"use strict";
const camelCase = (stringName) => {
  // validate
  const check = typeof stringName !== "string" || stringName.length === 0;
  if (check) {
    console.log("Bạn nhập sai nguyên liệu");
    return;
  }
  // PROCESS
  console.log("CHÚC MỪNG BẠN ĐÃ NHẬP ĐÚNG NGUYÊN LIỆU, TIẾP TỤC THÔI NÀO");
  const nameList = stringName.split(" ");
  const [first, second] = nameList;
  const secondCapitalize = second.replace(second[0], second[0].toUpperCase());
  return `${first}${secondCapitalize}`;
};

console.log(camelCase("first name"));
