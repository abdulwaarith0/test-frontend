import React, { useMemo, useState } from "react";
import { SectorsStyled } from "./styled";
import { ISector } from "../../../../types";

interface IProps {
	setCurrentSector: React.Dispatch<React.SetStateAction<ISector | null>>;
}

function Sectors({ setCurrentSector }: IProps) {
	const [activeItem, setActiveItem] = useState<string | null>(null);

	const data = useMemo(() => {
		const result: {
			name: string;
			sector: {
				name: string;
				industry?: {
					name: string;
					subIndustry?: {
						name: string;
					}[];
				}[];
			}[];
		}[] = [
			{
				name: "Manufacturing",
				sector: [
					{
						name: "Construction materials",
					},
					{
						name: "Electronics and Optics",
					},
					{
						name: "Food and Beverages",
						industry: [
							{
								name: "Bakery and confectionery products",
							},
							{
								name: "Beverages",
							},
							{
								name: "Fish and fish products",
							},
						],
					},
					{
						name: "Furnitures",
						industry: [
							{
								name: "Bathroom / Sauna",
							},
							{
								name: "Bedroom",
							},
							{
								name: "Children's room",
							},
						],
					},
					{
						name: "Machinery",
						industry: [
							{
								name: "Machinery components",
							},
							{
								name: "Machinery equipments / tools",
							},
							{
								name: "Manufacture of machinery",
							},
						],
					},
					{
						name: "Metal working",
						industry: [
							{
								name: "Construction of metal structures",
							},
							{
								name: "Houses and buildings",
							},
							{
								name: "Metal works",
								subIndustry: [
									{
										name: "CNC-machining",
									},
									{
										name: "Forging and Fasteners",
									},
								],
							},
						],
					},
				],
			},
			{
				name: "Others",
				sector: [
					{
						name: "Creative industries",
					},
					{
						name: "Energy technology",
					},
				],
			},
		];
		return result;
	}, []);

	const sector = useMemo(() => {
		return data.map((sectors, index) => {
			return (
				<div key={index}>
					<p>{sectors.name}</p>

					<div style={{ margin: "0 0 0 20px" }}>
						{sectors.sector.map((sector, index) => {
							const _activeItem = `${sectors.name}:${sector.name}`;
							return (
								<div key={index}>
									<p
										onClick={() => {
											setActiveItem(_activeItem);
											setCurrentSector({
												fullName: "",
												name: sectors.name,
												sector: {
													name: sector.name,
												},
											});
										}}
										style={{
											background:
												activeItem === _activeItem ? "#000" : "transparent",
											color: activeItem === _activeItem ? "#fff" : "#000",
										}}
									>
										{sector.name}
									</p>
									<div style={{ margin: "0 0 0 20px" }}>
										{sector.industry?.map((industry, index) => {
											const _activeItem = `${sectors.name}:${sector.name}:${industry.name}`;

											return (
												<div key={index}>
													<p
														onClick={() => {
															setActiveItem(_activeItem);
															setCurrentSector({
																fullName: "",
																name: sectors.name,
																sector: {
																	name: sector.name,
																	industry: {
																		name: industry.name,
																	},
																},
															});
														}}
														style={{
															background:
																activeItem === _activeItem
																	? "#000"
																	: "transparent",
															color:
																activeItem === _activeItem ? "#fff" : "#000",
														}}
													>
														{industry.name}
													</p>

													<div style={{ margin: "0 0 0 20px" }}>
														{industry?.subIndustry?.map(
															(subIndustry, index) => {
																const _activeItem = `${sectors.name}:${sector.name}:${industry.name}:${subIndustry.name}`;

																return (
																	<div key={index}>
																		<p
																			onClick={() => {
																				setActiveItem(_activeItem);
																				setCurrentSector({
																					fullName: "",
																					name: sectors.name,
																					sector: {
																						name: sector.name,
																						industry: {
																							name: industry.name,
																							subIndustry: subIndustry.name,
																						},
																					},
																				});
																			}}
																			style={{
																				background:
																					activeItem === _activeItem
																						? "#000"
																						: "transparent",
																				color:
																					activeItem === _activeItem
																						? "#fff"
																						: "#000",
																			}}
																		>
																			{subIndustry.name}
																		</p>
																	</div>
																);
															}
														)}
													</div>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			);
		});
	}, [activeItem, data, setCurrentSector]);

	return <SectorsStyled>{sector}</SectorsStyled>;
}

export default Sectors;
