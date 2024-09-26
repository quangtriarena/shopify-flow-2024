import { Modal } from "@shopify/app-bridge-react";
import { Button, Page } from "@shopify/polaris";
import { useState } from "react";
import { formSchema } from "../../mock/optionSet";
import OptionSetLeftModal from "./OptionSetLeftModal/index.jsx";
import OptionSetRightModal from "./OptionSetRightModal/index.jsx";
import { createContext } from "react";

export const OptionSetContext = createContext(null);

function Home() {
	const [tabSelected, setTabSelected] = useState("edit-options");
	const [formData, setFormData] = useState(formSchema);

	const handleChange = (name, value) => {
		let _formData = JSON.parse(JSON.stringify(formData));

		_formData[tabSelected][name].value = value;

		setFormData(_formData);
	};

	const handleSubmit = () => {};

	return (
		<Page>
			<Button onClick={() => window.shopify.modal.show("my-modal")}>Open Modal</Button>
			<Modal
				id="my-modal"
				title="Fullscreen Template"
				variant="large">
				<OptionSetContext.Provider
					value={{
						tabSelected,
						onTabChange: (newTab) => setTabSelected(newTab),
						formData,
						onChange: handleChange,
						onSubmit: handleSubmit,
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "20px",
							marginBottom: "20px",
						}}>
						<div
							style={{
								display: "flex",
								height: "500px",
								maxHeight: "500px",

								borderBottom: "2px solid #eee",
							}}>
							<div
								style={{
									width: "200px",
									borderRight: "2px solid #eee",
								}}>
								{/* LEFT MODAL */}
								<OptionSetLeftModal />
							</div>
							<div style={{ flex: "1", overflowY: "scroll" }}>
								{/* RIGHT MODAL */}
								<OptionSetRightModal />
							</div>
						</div>

						<div style={{ marginLeft: "auto", marginRight: "20px" }}>
							<Button
								size="large"
								variant="primary"
								onClick={handleSubmit}>
								Save
							</Button>
						</div>
					</div>
				</OptionSetContext.Provider>
			</Modal>
		</Page>
	);
}

export default Home;
