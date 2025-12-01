import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";

const FadeLeftRightContainer = ({ children, left }) => {
	return <div>{left ? <FadeLeft>{children}</FadeLeft> : <FadeRight>{children}</FadeRight>}</div>;
};

export default FadeLeftRightContainer;
