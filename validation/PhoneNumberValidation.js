import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const phoneSchema = Yup.object().shape({
	phone: Yup.string().test("isValidPhoneNumber", "Invalid phone number", function (value) {
		if (!value) {
			return true; // Empty value is considered valid to handle optional fields
		}

		// console.log(value);

		try {
			const normalizedValue = String(value).replace(/[\s()-]/g, "");
			let phone;

			if (normalizedValue.startsWith("+")) {
				phone = parsePhoneNumberFromString(normalizedValue);
			} else if (normalizedValue.length === 10) {
				phone = parsePhoneNumberFromString(normalizedValue, "US");
			} else {
				phone = parsePhoneNumberFromString(`+${normalizedValue}`);
			}

			// Check if the phone number is valid
			return phone && phone.isValid();
		} catch (error) {
			return false;
		}
	}),
});
