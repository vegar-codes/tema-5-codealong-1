import React from 'react';
import styled from 'styled-components';

export const PageTitleBase = styled.h1`
  color: rebeccapurple;
  font-weight: normal;
`;

function PageTitle({ children }) {
  return (
    <PageTitleBase>{children}</PageTitleBase>
  );
}

export default PageTitle;