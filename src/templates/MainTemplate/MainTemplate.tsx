import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { TemplateWrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }: any) => {
  return (
    <TemplateWrapper>
      <Navigation />
      {children}
    </TemplateWrapper>
  );
};

//@Todo children  type Any//
//@Todo if user not log in hide logout button
