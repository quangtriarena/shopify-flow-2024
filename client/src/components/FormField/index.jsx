import { Checkbox, Select, TextField } from "@shopify/polaris";

function FormField(props) {
	const { type, ...rest } = props;

	const renderUI = () => {
		switch (type) {
			case "text":
				return <TextField {...rest} />;

			case "select":
				return <Select {...rest} />;

			case "checkbox":
				return (
					<Checkbox
						checked={rest.value}
						{...rest}
					/>
				);
			default:
				return null;
		}
	};

	return <>{renderUI()}</>;
}

export default FormField;
