import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const NativeInput = styled.input`
  border: none;
  border-bottom: var(--borderBottom);
  color: inherit;
  padding-left: var(--paddingLeft);
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
const SIZES = {
  small: {
    "--borderBottom": `1px solid ${COLORS.black}`,
    "--fontSize": 14 + "px",
    "--paddingLeft": 24 + "px",
    "--height": 24 + "px",
    iconSize: 16,
  },
  large: {
    "--borderBottom": `2px solid ${COLORS.black}`,
    "--fontSize": 18 + "px",
    "--paddingLeft": 36 + "px",
    "--height": 36 + "px",
    iconSize: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...props }) => {
  const styles = SIZES[size];
  console.log(`styles`, styles);
  return (
    <Wrapper>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeInput style={{ "--width": width + "px", ...styles }} {...props} />
    </Wrapper>
  );
};

export default IconInput;
