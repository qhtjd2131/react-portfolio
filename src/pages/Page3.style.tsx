import styled from "styled-components";

const PageBox = styled.section`
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  margin-left : ${(props) => props.theme.sidebar_width};
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  background-color: white;
`;