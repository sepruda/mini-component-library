import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const PresentationBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-family: "Roboto", sans-serif;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  font-size: 1rem;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size="24" />
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

export default Select;
