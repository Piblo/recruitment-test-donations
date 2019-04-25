import styled, { keyframes } from 'styled-components';

const loader10g = keyframes`
	0% {background-color: rgba(255, 255, 255, .2); }
	25% { background-color: rgba(255, 255, 255, 1); }
	50% { background-color: rgba(255, 255, 255, .2); }
	75% { background-color: rgba(255, 255, 255, .2); }
	100% { background-color: rgba(255, 255, 255, .2); }
`;

const loader10m = keyframes`
	0%{background-color: rgba(255, 255, 255, .2);}
	25%{background-color: rgba(255, 255, 255, .2);}
	50%{background-color: rgba(255, 255, 255, 1);}
	75%{background-color: rgba(255, 255, 255, .2);}
	100%{background-color: rgba(255, 255, 255, .2);}
`;

const loader10d = keyframes`
	0%{background-color: rgba(255, 255, 255, .2);}
	25%{background-color: rgba(255, 255, 255, .2);}
	50%{background-color: rgba(255, 255, 255, .2);}
	75%{background-color: rgba(255, 255, 255, 1);}
	100%{background-color: rgba(255, 255, 255, .2);}
`;

const LoadingIndicator = styled.div`
	position: relative;
	width: 12px;
	height: 12px;
	top: 46%;
	left: 46%;
	border-radius: 12px;
	animation: ${loader10m} 3s ease-in-out infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: -25px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    animation: ${loader10g} 3s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 25px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    animation: ${loader10d} 3s ease-in-out infinite;
  }
`;

export default LoadingIndicator;
