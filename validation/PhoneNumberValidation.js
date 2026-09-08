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
			const phoneValue = normalizedValue.startsWith("+") ? normalizedValue : `+${normalizedValue}`;
			const phone = parsePhoneNumberFromString(phoneValue);

			// Check if the phone number is valid
			return phone && phone.isValid();
		} catch (error) {
			return false;
		}
	}),
});
