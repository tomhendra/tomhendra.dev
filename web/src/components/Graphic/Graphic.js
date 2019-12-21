import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import { childrenPropType } from '../../utils/shared-prop-types';

/**
 * `....................styles....................`
 */

const styles = ({ noMargin, theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n800,
    fontFamily: theme.fontStack.heading,
    fontSize: ['18.5rem', '39.5rem', '57rem', '57rem'],
    fontWeight: theme.fontWeight.bold,
    lineHeight: [0.75, 0.95],
    marginTop: !noMargin
      ? [
          theme.spacings.india,
          theme.spacings.india,
          theme.spacings.hotel,
          theme.spacings.hotel,
        ]
      : 0,
    position: 'absolute',
    top: 0,
    zIndex: theme.zIndex.background,
  });

/**
 * `....................component....................`
 */

const Heading = styled.span(styles);

/**
 * `....................propTypes....................`
 */

Heading.propTypes = {
  children: childrenPropType,
  noMargin: PropTypes.bool,
};

Heading.defaultProps = {
  children: null,
  noMargin: false,
};

export default withTheme(Heading);
