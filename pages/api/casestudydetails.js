import * as fs from "node:fs";

export default function handler(req, res) {
	fs.readFile(`data/caseStudyDetails.json`, "utf-8", (err, data) => {
		if (err) {
			res.status(500).json({ error: "some error occured" });
		}
		res.status(200).json(JSON.parse(data));
	});
}
