import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 12px;
  background-color: #e5e5e5;
  border-radius: 6px;
  margin-bottom: 30px;
  overflow: hidden;
`;

export const Fill = styled.div`
  height: 100%;
  background-color: #58cc02;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;