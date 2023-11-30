import styled, { css } from "styled-components";

export const InputStyled = styled.input<{
	h?: string;
	border?: string;
	borderR?: string;
	padding?: string;
}>`
	color: inherit;
	padding: ${({ padding }) => padding ?? "0 10px"};
	width: 100%;
	border: ${({ border }) => border ?? "unset"};

	&:focus,
	&:hover {
		border: ${({ border }) => border ?? "unset"};
	}

	${({ h }) =>
		h &&
		css`
			height: ${h};
		`}

	${({ borderR }) =>
		borderR &&
		css`
			border-radius: ${borderR};
		`}
`;
