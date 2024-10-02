import { useContext } from "react";
import FormField from "../../../components/FormField/";
import { OptionSetContext } from "../index.jsx";

function OptionSetRightModal() {
	const { tabSelected, formData, onChange } = useContext(OptionSetContext);

	const renderUIComponent = () => {
		switch (tabSelected) {
			case "edit-options":
				const _fields = formData[tabSelected];

				return Object.keys(_fields).map((key) => {
					return (
						<FormField
							type={_fields[key].type}
							{..._fields[key]}
							onChange={(value) => onChange(key, value)}
						/>
					);
				});

			case "functions":
				return <div>edit functions</div>;

			case "conditions":
				return <div>edit conditions</div>;

			default:
				return null;
		}
	};

	return <div style={{ padding: "15px" }}>{renderUIComponent(tabSelected)}</div>;
}

export default OptionSetRightModal;
