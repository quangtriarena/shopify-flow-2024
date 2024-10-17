// tính giai thừa sử dụng đệ quy

function factorial(n) {
	if (n <= 0) return 1;

	return n * factorial(n - 1);
}

/**
 * n = 5
 * result 1: 5 * factorial(4) = 5 * 24 = 120 => kq cuối cùng
 * result 2: 4 * factorial(3) = 4 * 6 = 24
 * result 3: 3 * factorial(2) = 3 * 2 = 6
 * result 4: 2 * factorial(1) => 2 * 1 = 2
 * result 5: 1 * factorial(0) => 1 * 1 = 1
 */

// fibonacy function
// fibonacci(6) sẽ trả về 8 (dãy Fibonacci là 0, 1, 1, 2, 3, 5, 8...).

// findMax([1, 5, 3, 9, 2]) sẽ trả về 9

function findMax(array) {
	if (array.length === 1) {
		return array[0];
	}

	const maxOfRest = findMax(array.slice(1));

	return array[0] > maxOfRest ? array[0] : maxOfRest;
}

let a = findMax([1, 5, 3, 9, 2]);

/**
Step 0: findMax([1, 5, 3, 9, 2]) => gọi findMax([5, 3, 9, 2])
Step 1: findMax([5, 3, 9, 2]) => gọi findMax([3, 9, 2])
Step 2: findMax([3, 9, 2]) => gọi findMax([9, 2])
Step 3: findMax([9, 2]) => gọi findMax([2])
Step 4: findMax([2]) => trả về 2 (điều kiện dừng)

Quay ngược lại:
Step 3: So sánh 9 và 2, trả về 9
Step 2: So sánh 3 và 9, trả về 9
Step 1: So sánh 5 và 9, trả về 9
Step 0: So sánh 1 và 9, trả về 9
*/

const websiteStructure = {
	name: "Home",
	children: [
		{
			name: "Products",
			children: [
				{
					name: "Electronics",
					children: [
						{ name: "Mobile Phones", children: [] },
						{ name: "Laptops", children: [] },
					],
				},
				{
					name: "Clothing",
					children: [
						{ name: "Men", children: [] },
						{ name: "Women", children: [] },
					],
				},
			],
		},
		{ name: "About", children: [] },
		{ name: "Contact", children: [] },
	],
};

const currentPath = ["Home", "Products", "Electronics", "Laptops"];

// Home > Products > Electronics > Laptops

function generateBreakscrumbs(webStructure, currentPath = "") {
	let breadcrumbs = currentPath ? currentPath + " > " + webStructure.name : webStructure.name;

	if (webStructure.children.length === 0) {
		return [breadcrumbs];
	}

	let allBreakscrumbs = [];

	for (let i = 0; i < webStructure.children.length; i++) {
		let item = webStructure.children[i];

		const _itemResult = generateBreakscrumbs(item, breadcrumbs);

		allBreakscrumbs = allBreakscrumbs.concat(_itemResult);
	}

	return allBreakscrumbs;
}

let b = generateBreakscrumbs(websiteStructure);

console.log("b", b);

// sum(5);  1+2+3+4+5
function sum(n) {
	if (n === 1) return 1;
	return n + sum(n - 1);
}

console.log("c", sum(5));

//Đếm số chữ số của một số
//countDigits(12345); // Kết quả: 5

function countDigits(n) {
	if (n < 10) return 1;

	return 1 + countDigits(Math.trunc(n / 10));
}

console.log("d", countDigits(123));

/**
 * results 1: countDigits(12345) => 1 + countDigits(1234) = 1 + 4 = 5
 * results 2: countDigits(1234) => 1 + countDigits(123) 1 + 3 = 4
 * results 3: countDigits(123) => 1 + countDigits(12) => 1 + 2 = 3
 * results 4: countDigits(12) => 1 + countDigits(1) => 1 + 1 = 2
 */

//Tính tổng của mảng
//sumArray([1, 2, 3, 4, 5]); // Kết quả: 15

function sumArray(array) {
	if (array.length === 1) {
		return array[0];
	}

	const remainingArray = array.slice(1);

	return array[0] + sumArray(remainingArray);
}

console.log("e", sumArray([1, 2, 3]));

// Duyệt và tính tổng tất cả giá trị trong object
const data = {
	a: 5,
	b: { c: 10, d: { e: 2 } },
	f: 3,
};
// sumObject(data); // Kết quả: 20

function sumObject(objectData) {
	let sum = 0;

	for (let key in objectData) {
		if (typeof objectData[key] === "number") {
			sum += objectData[key];
		}

		if (typeof objectData[key] === "object" && obj[key] !== null) {
			sum += sumObject(objectData[key]);
		}
	}

	return sum;
}

console.log("f", sumObject(data));

//Tìm giá trị lớn nhất trong mảng lồng nhau
const arr = [1, [4, 6], [3, [9, 2]]];

function findMaxInNestedArray(array) {
	let max = -Infinity;

	for (let i = 0; i < array.length; i++) {
		let item = array[i];

		if (typeof item === "number") {
			if (item > max) {
				max = item;
			}
		}

		if (Array.isArray(item)) {
			let nestedMax = findMaxInNestedArray(item);
			if (nestedMax > max) {
				max = nestedMax;
			}
		}
	}

	return max;
}

let h = findMaxInNestedArray(arr);

console.log("h", h);

//Đếm số lần xuất hiện của một giá trị trong mảng
//countOccurrences([1, 2, 3, 2, 2, 4, 2], 2); // Kết quả: 4

function countOccurrences(array, target) {
	if (!array.length) {
		return 0;
	}

	const first = array[0];
	const remaining = array.slice(1);

	if (first === target) {
		return 1 + countOccurrences(remaining, target);
	} else {
		return countOccurrences(remaining, target);
	}
}

const g = countOccurrences([1, 2, 3, 2, 2, 4, 2], 2);

console.log("g", g);

// Tìm tất cả các đường đi từ gốc đến lá trong cây nhị phân

const tree = {
	value: 1,
	left: { value: 2, left: { value: 4 }, right: { value: 5 } },
	right: { value: 3 },
};
// Kết quả: [[1, 2, 4], [1, 2, 5], [1, 3]]
function findAllPaths(tree, subTree = [], allPath = []) {
	if (!tree) return;

	subTree.push(tree.value);

	if (!tree.left && !tree.right) {
		allPath.push([...subTree]);
	}

	if (tree.left) {
		findAllPaths(tree.left, [...subTree], allPath);
	}

	if (tree.right) {
		findAllPaths(tree.right, [...subTree], allPath);
	}

	return allPath;
}

const t = findAllPaths(tree);

console.log("t", t);

//Tính toán số cách để đạt được tổng bằng một số cho trước
//countWays([1, 2, 3], 4);
// Kết quả: 7 (có các cách [1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1])

function countWays(numbers, target) {
	if (target === 0) {
		return 1;
	}

	if (target < 0) {
		return 0;
	}

	let totalWays = 0;

	for (let i = 0; i < numbers.length; i++) {
		totalWays += countWays(numbers, target - numbers[i]);
	}

	return totalWays;
}

const w = countWays([1, 2, 3], 4);
console.log(w);
