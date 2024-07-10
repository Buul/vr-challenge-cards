import styled from 'styled-components';
import { breakpoints } from 'vr-challenge-ds';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${breakpoints.xl}) {
    justify-content: center;
  }
`;

export const ShowMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
