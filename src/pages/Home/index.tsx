import React, { useCallback, useState } from "react";
import { Input } from "../../components";
import { Header, Sectors } from "./components";
import { HomeStyled } from "./styled";
import { ISector } from "../../types";
import { useAddNewEntry } from "../../hooks";

function Home() {
	const [name, setName] = useState<string>("");
	const [currentSector, setCurrentSector] = useState<ISector | null>(null);
	const [isAgreedPrivacy, SetISAgreedPrivacy] = useState<boolean>(false);
	const { addNewEntry } = useAddNewEntry();

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!isAgreedPrivacy)
				return alert("Please agree to terms and conditions");
			else if (name.length === 0) return alert("Please enter a name!");

			if (!currentSector) return alert("Please select a sector");

			const result = await addNewEntry({
				...currentSector,
				fullName: name,
			});
			console.log("result", result);
		},
		[addNewEntry, currentSector, isAgreedPrivacy, name]
	);

	return (
		<HomeStyled>
			<Header />

			<form className="form-control" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name" className="grp-name">
						Name:
					</label>
					<Input
						type="text"
						id="name"
						value={name}
						placeholder="What's your name?"
						className="grp-value"
						h="40px"
						border="1px solid #000"
						borderR="6px"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="name" className="grp-name">
						Sector:
					</label>
					<div className="grp-value">
						<Sectors setCurrentSector={setCurrentSector} />
					</div>
				</div>

				<div className="terms">
					<Input
						type="checkbox"
						className="grp-name"
						onChange={(e) => SetISAgreedPrivacy(e.target.checked)}
					/>
					<div className="grp-value">
						<p>Agree to terms</p>
					</div>
				</div>

				<button type="submit" className="btn">
					Save
				</button>
			</form>
		</HomeStyled>
	);
}

export default Home;
