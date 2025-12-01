export const sendPricingForm = async (data) =>
	fetch("/api/pricingform", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => {
		if (!res.ok) throw new Error("faild to send messsage");
		return res.json();
	});
