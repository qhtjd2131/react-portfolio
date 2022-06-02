import styled from "styled-components";

export const PageBox = styled.section`
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  margin-left: ${(props) => props.theme.sidebar_width};
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  background-color: white;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 4px;
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  /* border-bottom: 1px solid gray; */
  letter-spacing: 1px;
`;

export const SectionDivider = styled.div`
    width : 0%;
    height : 3px;
    padding : 0;
    margin : 5px 0;
    background-color : gray;
`;
