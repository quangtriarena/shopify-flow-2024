import React, { useContext } from "react";
import { tabs } from "../../../mock/optionSet";
import { OptionSetContext } from "../index.jsx";
function OptionSetLeftModal() {
	const { tabSelected, onTabChange } = useContext(OptionSetContext);

	return (
		<>
			{tabs.map((_tab) => (
				<div
					onClick={() => onTabChange(_tab.id)}
					style={{
						backgroundColor: _tab.id === tabSelected ? "#eee" : "",
						margin: "5px",
						padding: "5px",
						borderRadius: "5px",
						cursor: "pointer",
						color: _tab.id === tabSelected ? "#000" : "#333",
					}}
					key={_tab.id}>
					{_tab.label}
				</div>
			))}
		</>
	);
}

export default OptionSetLeftModal;
