import gql from 'graphql-tag';

export const GET_THEME_STATE = gql`
query GET_THEME_STATE {
	themeState @client {
		scroll
		palette
		gradientIndex
		gradientString
	}
}
`;

export const SET_THEME_STATE = gql`
mutation SET_THEME_STATE($scroll: Integer, $palette: String, $gradientIndex: Float, $gradientString: String) {
	setThemeState(scroll: $scroll, palette: $palette, gradientIndex: $gradientIndex, gradientString: $gradientString) @client
}
`;

export const GET_THEME_STATE_PALETTE = gql`
fragment themePalette on ThemeState {
	palette
}
`;

export const GET_THEME_STATE_SCROLL = gql`
fragment themeScroll on ThemeState {
	scroll
}
`;

export const GET_THEME_STATE_GRADIENT = gql`
fragment themeGradient on ThemeState {
	gradient
}
`;
