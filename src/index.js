/**
 * @constructor
 * @param {Object[]} drinkList - [{drink, quantity}, ... ]
 * @example [{new Drink('hotAmericano', 900), 3}]
 */
function VendingMachine(drinkList) {}

/**
 * @param {number} price - input coin amount
 * @description 가격이 같은 음료수를 선택해서 구매한다.
 * @example === 아이스 아메리카노(1/10개)를 1000원에 구매했습니다. ===
 */
VendingMachine.prototype.getItem = function (price) {}; // console.log

/**
 * @param {Drink} drink - drink itself.
 * @param {number} quantity - The quantity of the drink.
 * @description 음료수와 개수를 자판기에 추가한다.
 */
VendingMachine.prototype.addItem = function (drink, quantity) {};

/**
 * Drink
 * @constructor
 * @param {string} name - The name of the drink.
 * @param {number} price - The price of the drink.
 */
function Drink(name, price) {}
