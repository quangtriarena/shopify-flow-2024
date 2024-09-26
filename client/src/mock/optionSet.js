const formSchema = {
	"edit-options": {
		optionLabel: {
			type: "text",
			label: "Option Label",
			defaultValue: "Label name - text-1701970990591",
			value: "",
			placeholder: "Enter label name",
		},
		fieldWidth: {
			type: "select",
			label: "Field Width",
			options: ["20", "30", "40", "50", "60", "70", "80", "90", "100"],
			defaultValue: "100",
			value: "",
		},
		fieldMaxWidth: {
			type: "select",
			label: "Field Max Width (px)",
			options: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
			defaultValue: "300",
			value: "",
		},
		require: {
			type: "checkbox",
			label: "Required",
			defaultValue: false,
			value: false,
		},
		hideLabel: {
			type: "checkbox",
			label: "Hide Label",
			defaultValue: false,
			value: false,
		},
		changePrice: {
			type: "checkbox",
			label: "Change Price",
			defaultValue: false,
			value: false,
		},
		customCssClass: {
			type: "checkbox",
			label: "Custom CSS Class",
			defaultValue: false,
			value: false,
		},
		defaultText: {
			type: "text",
			label: "Default Text",
			defaultValue: "Pre-filled value empty",
			value: "",
			placeholder: "Enter default text",
		},
		placeholderText: {
			type: "text",
			label: "Placeholder Text",
			defaultValue: "place holder",
			value: "",
			placeholder: "Enter placeholder text",
		},
		autoStyle: {
			type: "select",
			label: "Auto Style",
			options: ["Uppercase", "Lowercase", "Capitalize"],
			defaultValue: "Uppercase",
			value: "",
		},
		validation: {
			type: "select",
			label: "Validation",
			options: ["None", "Email", "Custom Regex"],
			defaultValue: "Custom Regex",
			value: "",
		},
		customRegex: {
			type: "text",
			label: "Regex Expression",
			defaultValue: "[^a-zA-Z ]",
			value: "",
			placeholder: "Enter custom regex",
			dependsOn: "validation", // Chỉ hiện khi validation là 'Custom Regex'
			condition: (formData) => formData.validation === "Custom Regex", // Điều kiện hiển thị
		},
		validationErrorMessage: {
			type: "text",
			label: "Validation Error Message",
			defaultValue: "e.g. Error",
			value: "",
			placeholder: "Enter error message",
		},
		maxCharacters: {
			type: "text",
			label: "Max. Characters per line",
			defaultValue: "",
			value: "",
			placeholder: "e.g. 20",
		},
		showMaxInputText: {
			type: "checkbox",
			label: "Show max input text",
			defaultValue: false,
			value: false,
		},
		fieldHelp: {
			type: "textarea",
			label: "Field Help (HTML supported)",
			defaultValue: "Default empty",
			value: "",
			placeholder: "Enter field help",
		},
		tooltip: {
			type: "textarea",
			label: "Tooltip (HTML supported)",
			defaultValue: "Default empty",
			value: "",
			placeholder: "Enter tooltip",
		},
		priceAdjust: {
			type: "priceAdjust",
			label: "Price Adjust",
			defaultValue: { type: "Add Charge", amount: 10, currency: "USD" },
			value: "",
		},
		fieldHelpPosition: {
			type: "select",
			label: "Field Help Position",
			options: ["Above input", "Below input"],
			defaultValue: "Below input",
			value: "",
		},
		cssClass: {
			type: "text",
			label: "CSS Class",
			defaultValue: "form-control-text-field",
			value: "",
			placeholder: "Enter CSS class",
		},
	},

	functions: {},
	conditions: {},
};

const functionSchema = {};

const conditionSchema = {};

const tabs = [
	{
		id: "edit-options",
		label: "Edit Options",
	},

	{
		id: "functions",
		label: "Functions",
	},

	{
		id: "conditions",
		label: "Conditions",
	},
];

export { functionSchema, conditionSchema, formSchema, tabs };
