import styled from 'styled-components/native';

import {Icon, IconProps} from 'react-native-elements';

const buttonProps: IconProps = {
  raised: true,
  name: 'plus',
  type: 'font-awesome',
  color: '#004ba0',
  containerStyle: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
};

export const AddButton = styled(Icon).attrs(() => ({
  ...buttonProps,
}))<IconProps>``;
