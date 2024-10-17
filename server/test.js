const condition = {
	type: "any", // Sử dụng "any" để chỉ cần 1 nhóm điều kiện thỏa mãn
	action: "show",
	filteredGroup: [
		{
			group: "Group 1",
			type: "all",
			conditions: [
				{
					field: "variant",
					operator: "equals",
					value: "red",
				},
				{
					field: "material",
					operator: "equals",
					value: "sat",
				},
			],
		},

		{
			group: "Group 2",
			type: "all",
			conditions: [
				{
					field: "material",
					operator: "equals",
					value: "kem",
				},
				{
					field: "size",
					operator: "not_equals",
					value: "30",
				},
			],
		},
	],
};

const objectInput = {
	material: "kem",
	variant: "red",
	size: "32",
};

const checkCondition = (condition, input) => {
	const result = condition.filteredGroup[condition.type === "all" ? "every" : "some"](
		(_groupCondition) => checkGroupCondition(_groupCondition, input)
	);

	console.log("result", result);

	return result;
};

const checkGroupCondition = (group, input) => {
	return group.conditions[group.type === "all" ? "every" : "some"]((_groupItem) => {
		console.log("_groupItem", _groupItem);

		const conditionResult = checkConditionItems(_groupItem, input);

		return conditionResult;
	});
};

const checkConditionItems = (conditionItem, input) => {
	let result;

	switch (conditionItem.operator) {
		case "equals":
			result = input[conditionItem.field] === conditionItem.value;

			return result;

		case "not_equals":
			result = input[conditionItem.field] !== conditionItem.value;

			return result;

		default:
			console.log(`Unsupported operator: ${conditionItem.operator}`);
			return false;
	}
};

// Kiểm tra điều kiện
checkCondition(condition, objectInput);
