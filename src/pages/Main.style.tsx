import styled from "styled-components";

export const OneMain = styled.div`
  background-color: #232323;
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  margin-left: ${(props) => props.theme.sidebar_width};
  height: calc(var(--vh) * 100);
  overflow : hidden;
`;


export const OneText = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 600;
  position: absolute;
  right: 0;
  opacity: 0;
  white-space: nowrap;
`;