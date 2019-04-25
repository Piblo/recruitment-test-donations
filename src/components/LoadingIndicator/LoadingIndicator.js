import styled, { keyframes } from 'styled-components';

const leftDot = keyframes`
	0% {background-color: rgba(255, 255, 255, .2); }
	25% { background-color: rgba(255, 255, 255, 1); }
	50% { background-color: rgba(255, 255, 255, .2); }
	75% { background-color: rgba(255, 255, 255, .2); }
	100% { background-color: rgba(255, 255, 255, .2); }
`;

const middleDot = keyframes`
	0%{background-color: rgba(255, 255, 255, .2);}
	25%{background-color: rgba(255, 255, 255, .2);}
	50%{background-color: rgba(255, 255, 255, 1);}
	75%{background-color: rgba(255, 255, 255, .2);}
	100%{background-color: rgba(255, 255, 255, .2);}
`;

const rightDot = keyframes`
	0%{background-color: rgba(255, 255, 255, .2);}
	25%{background-color: rgba(255, 255, 255, .2);}
	50%{background-color: rgba(255, 255, 255, .2);}
	75%{background-color: rgba(255, 255, 255, 1);}
	100%{background-color: rgba(255, 255, 255, .2);}
`;

const LoadingIndicator = styled.div`
	position: absolute;
	width: 12px;
	height: 12px;
	top: 50%;
	left: 50%;
	border-radius: 12px;
	animation: ${middleDot} 3s ease-in-out infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: -25px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    animation: ${leftDot} 3s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 25px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    animation: ${rightDot} 3s ease-in-out infinite;
  }
`;

export default LoadingIndicator;
