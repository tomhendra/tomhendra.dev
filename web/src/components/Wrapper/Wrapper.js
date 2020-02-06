import styled from '@emotion/styled';

import { childrenPropType } from '../../utils/shared-prop-types';

// ....................styles....................

const styles = {
  minHeight: '100vh',
  minWidth: '100vw',
  overflow: 'hidden',
  position: 'relative',
};

// ....................component....................

const Wrapper = styled.div(styles);

// ....................propTypes....................

Wrapper.propTypes = {
  children: childrenPropType,
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
