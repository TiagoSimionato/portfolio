/* eslint-disable style/no-tabs */
import variables from 'common/variables.json';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Poppins' , sans-serif;
  margin: 0;
  min-height: 100vh;
}
a {
	color: white;
	text-decoration: none;
}
a:hover {
	color: ${variables.colors.contrast};
}

.secTitle {
	color: ${variables.colors.contrast};
  font-size: 3rem;
  font-weight: 600;
	line-height: 2.75rem;
}

::-webkit-scrollbar {
  width: 0.5rem;
}
 
::-webkit-scrollbar-track {
	background: ${variables.colors.secondary};
}
 
::-webkit-scrollbar-thumb {
	background: ${variables.colors.tertiary};
	border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
	background: ${variables.colors.tertiaryLighter};
}

@supports (scrollbar-color: red blue) {
	* {
		scrollbar-color: ${variables.colors.tertiary} ${variables.colors.secondary};
		scrollbar-width: thin;
	}
}

@media screen and (max-width: ${variables.breakpoints.tablet}){
	.secTitle {
		font-size: 2.275rem;
	}
}
`;
