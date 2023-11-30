import styled from "styled-components";

export const HomeStyled = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	padding: 20px;

	.form-control {
		display: grid;
		width: 100%;
		height: 100%;
		max-width: 500px;
		margin: 10px 0 0 0;
		gap: 10px 0;

		.form-group,
		.terms {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
		}

		.form-group {
			.grp-name {
				grid-column: 1/3;
			}

			.grp-value {
				grid-column: 3/-1;
			}
		}

		.terms {
			grid-template-columns: repeat(15, 1fr);

			.grp-name {
				grid-column: 1;
			}

			.grp-value {
				grid-column: 2/-1;
			}
		}

		.btn {
			width: 100px;
			height: 40px;
			background: #000;
			color: #fff;
			border: none;
			border-radius: 10px;
			font-size: 14px;
			cursor: pointer;
		}
	}
`;
