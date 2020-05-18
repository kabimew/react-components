import { primary, secondary, info, success, warning, error } from '../colors';

export const colors = {
  primary: {
    color: primary.contrastText,
    backgroundColor: primary.main,
    '&:hover': {
      backgroundColor: primary.dark,
    },
  },
  secondary: {
    color: secondary.contrastText,
    backgroundColor: secondary.main,
    '&:hover': {
      backgroundColor: secondary.dark,
    },
  },
  info: {
    color: info.contrastText,
    backgroundColor: info.main,
    '&:hover': {
      backgroundColor: info.dark,
    },
  },
  success: {
    color: success.contrastText,
    backgroundColor: success.main,
    '&:hover': {
      backgroundColor: success.dark,
    },
  },
  warning: {
    color: warning.contrastText,
    backgroundColor: warning.main,
    '&:hover': {
      backgroundColor: warning.dark,
    },
  },
  error: {
    color: error.contrastText,
    backgroundColor: error.main,
    '&:hover': {
      backgroundColor: error.dark,
    },
  },
};
