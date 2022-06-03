import styled from "styled-components";

export const SideBarBox = styled.div`
  height: calc(var(--vh) * 100);
  background-color:#252526;
  width: ${(props) => props.theme.sidebar_width};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items : flex-start;
  box-sizing : border-box;
  padding : 20px;
`;

export const PortFolioTextLogo = styled.div`
  font-size: 36px;
  font-weight: 600;
  color:  #c4c08d;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
`;
