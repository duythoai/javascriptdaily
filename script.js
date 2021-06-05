"use strict";
// Chuyển các ký tự đầu của 1 String thành chữ viết hoa - capitalize
/**
 Input: tran duy thoai
 Outout: Tran Duy Thoai
 */

const myName = "tran duy thoai";
const myWife = "nguyen thi cho";

const markCreditCard = (creditNumber) => {
  const last4Letter = creditNumber.slice(-4);
  const endString = last4Letter.padStart(creditNumber.length, "*");

  return endString;
};
// get element
const h1Element = document.querySelector("h1");
if (h1Element) {
  const h1Content = h1Element.textContent;
  h1Element.textContent = markCreditCard(h1Content);
}
console.log(markCreditCard(111111111));
