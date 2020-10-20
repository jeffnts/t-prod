import styled from 'styled-components/native';

import {Button as RNEButton, ButtonProps} from 'react-native-elements';

const buttonProps: ButtonProps = {
  buttonStyle: {
    width: '100%',
    alignItems: 'center',
    margin: 0,
  },
};

export const Button = styled(RNEButton).attrs(() => ({
  ...buttonProps,
}))<ButtonProps>``;
