import { Tooltip } from "@shopify/polaris";
import React from "react";

function ToolTip({ children }) {
	return (
		<Tooltip
			active
			content="test">
			{children}
		</Tooltip>
	);
}

export default ToolTip;
