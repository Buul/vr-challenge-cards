import styled from 'styled-components';
import { breakpoints } from 'vr-challenge-ds';

export const Wrapper = styled.div`
  height: 410px;
  width: 396px;
  border-radius: 16px;
  border: 1px solid #a0aab4;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 24px 40px;

  @media (max-width: ${breakpoints.md}) {
    width: 350px;
    padding: 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 188px;
  }
`;

export const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
