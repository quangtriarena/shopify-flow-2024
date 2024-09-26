import { TitleBar } from "@shopify/app-bridge-react";
import { Text, Tooltip } from "@shopify/polaris";
import React from "react";

function Template(props) {
	return (
		<>
			<Tooltip
				active
				content="This order has shipping labels.">
				<Text
					fontWeight="bold"
					as="span">
					Order #1001
				</Text>
			</Tooltip>

			<TitleBar title="Fullscreen mode"></TitleBar>
		</>
	);
}

export default Template;
