import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Logo from '../../../Logo';

import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import { withMediaQueries } from '../../../../assets/styles/style-helpers';

import { colors, sizes } from '../../../../assets/styles/constants';

const { NEUTRAL } = colors;
const { BRAVO, FOXTROT } = sizes;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  marginBottom: theme.spacings.charlie,
});

const elementStyles = ({ theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n400,
    fontFamily: theme.fontStack.heading,
    fontSize: theme.typography.text.charlie.fontSize,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: 0.75,
    textTransform: 'uppercase',
  });

// ....................component....................

const CopyrightContainer = styled.div(containerStyles);
const CopyrightElement = styled.span(elementStyles);

function Copyright() {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();

  return (
    // prettier-ignore
    <CopyrightContainer>
      <Logo color={NEUTRAL} size={FOXTROT} spacingRight={BRAVO} />
      <CopyrightElement>
        {siteMetadata.author}
        {' '}
        &copy;
        {' '}
        {date}
      </CopyrightElement>
    </CopyrightContainer>
  );
}

export default withTheme(Copyright);
