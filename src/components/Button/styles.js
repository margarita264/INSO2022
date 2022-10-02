import styled from 'styled-components';

export const Container = styled.div`
  //display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 20px 20px;

  > svg {
    margin: 0 30px;
  }

  &:hover {
    background-color: #062C30;
  }
`;
