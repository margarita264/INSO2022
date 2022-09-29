import styled from 'styled-components';

export const Container = styled.div`
  background-color: #05595B;
  // position: fixed;
  height: 160%;
  top: 150px;
  left: 160px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  // > svg {
  //   position: fixed;
  //   color: white;
  //   width: 30px;
  //   height: 30px;
  //   margin-top: 32px;
  //   margin-left: 32px;
  //   cursor: pointer;
  // }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 10px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 0px;
`;