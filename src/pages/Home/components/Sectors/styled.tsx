import styled from "styled-components";

export const SectorsStyled = styled.div`
	width: 100%;
	height: auto;
	max-height: 200px;
	border: 1px solid #000;
	border-radius: 5px;
	cursor: pointer;
	padding: 5px;
	overflow-y: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 0.5vw;
	}

	&::-webkit-scrollbar-thumb {
		background: #000;
		border-radius: 0.25em;
		width: 100%;
	}

	&::-webkit-scrollbar-track {
		background: #fff;
	}
`;
