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
  height: ${(props) => props.theme.page_header_height};
  box-sizing: border-box;
  padding: 4px;
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
`;

export const SectionDivider = styled.div`
  width: 0%;
  height: 3px;
  padding: 0;
  margin: 5px 0;
  background-color: gray;
`;

export const BodySection = styled.div`
  width: 100%;
  height: calc(
    100% - (${(props) => props.theme.page_header_height}) - 13px
  ); //13px is divider height
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BodyText = styled.div`
  font-size: 26px;
  letter-spacing: 2px;
  width: 100%;
  line-height: 36px;
  margin: 20px 0;
  font-weight : 600;
  opacity :1;
`;

export const TextWrapper = styled.div`
    width : 100%;
    /* overflow : hidden; */
`;