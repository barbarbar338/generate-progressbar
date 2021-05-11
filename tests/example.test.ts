import { expect } from "chai";
import { generate, IProgressbarOptions } from "..";

describe("Progressbar Test", () => {
	it("Default Bar", (done) => {
		const bar = generate(10, 50); // 50%, 12 chars

		expect(bar).to.equal("[▓▓▓▓▓░░░░░]");
		expect(bar.length).to.equal(12);

		const bar2 = generate(100, 12); // 12%, 102 chars

		expect(bar2).to.equal(
			"[▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]",
		);
		expect(bar2.length).to.equal(102);

		done();
	});

	it("Custom Bar", (done) => {
		const options: IProgressbarOptions = {
			empty: "-",
			end: "|",
			full: "+",
			seperator: "o",
			start: "|",
		};
		const bar = generate(10, 50, options); // 50%, 12 chars

		expect(bar).to.equal("|++++o-----|");
		expect(bar.length).to.equal(12);

		const options2: IProgressbarOptions = {
			end: "}",
			start: "{",
		};
		const bar2 = generate(70, 25, options2); // 25%, 72 chars

		expect(bar2).to.equal(
			"{▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░}",
		);
		expect(bar2.length).to.equal(72);

		done();
	});
});
