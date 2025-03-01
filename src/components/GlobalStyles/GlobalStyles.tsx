/* eslint-disable style/no-tabs */
import variables from 'common/variables.json';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

//RESET CSS BEGIN *********************************************************
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//RESET CSS END****************************************************************** 

body {
  font-family: 'Poppins' , sans-serif;
  margin: 0;
  min-height: 100vh;
}
a {
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
