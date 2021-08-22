/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  height: var(--height);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: var(--width);
  height: var(--height);
`;

const BarWraper = styled.div`
  border-radius: var(--borderRadius);
  /* Round the edges when the bar is approaching full */
  overflow: hidden;
`;

const SIZES = {
  small: {
    height: "8px",
    borderRadius: "4px",
    padding: 0,
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
    padding: 0,
  },
  large: {
    height: "24px",
    borderRadius: "8px",
    padding: "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgresBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        "--padding": styles.padding,
        "--borderRadius": styles.borderRadius,
      }}
    >
      <BarWraper style={{ borderRadius: styles.borderRadius }}>
        <Bar style={{ "--width": value + "%", "--height": styles.height }} />
      </BarWraper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
