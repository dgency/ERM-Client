import FadeInUpSection from "./FadeInUpSection";

const FadeInUpContainer = ({ children }) => {
  return (
    <div>
      <FadeInUpSection>
        {children}
      </FadeInUpSection>
    </div>
  );
};

export default FadeInUpContainer;