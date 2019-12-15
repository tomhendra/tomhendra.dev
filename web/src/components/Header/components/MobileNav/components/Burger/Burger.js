import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

// ....................styles....................

const elementStyles = ({ open, theme }) => ({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '2rem',
  width: '2rem',
  padding: '0',
  zIndex: theme.zIndex.burger,

  '&:focus': {
    outline: 'none',
  },

  '& > span': {
    width: '2rem',
    height: '0.2rem',
    background: theme.colors.n500,
    borderRadius: theme.borderRadius.delta,
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px',

    ':first-of-type': {
      transform: open ? 'rotate(45deg)' : 'rotate(0)',
    },

    ':nth-of-type(2)': {
      opacity: open ? 0 : 1,
    },

    ':nth-of-type(3)': {
      transform: open ? 'rotate(-45deg)' : 'rotate(0)',
    },
  },
});

// ....................component....................

const BurgerElement = styled.button(elementStyles);

const Burger = ({ open, setOpen }) => (
  <BurgerElement open={open} onClick={() => setOpen(!open)}>
    <span />
    <span />
    <span />
  </BurgerElement>
);

// ....................propTypes....................

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

PropTypes.defaultProps = {
  open: null,
  setOpen: null,
};

export default withTheme(Burger);