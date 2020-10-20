import styled from 'styled-components/native';

import {Text, TextProps} from 'react-native-elements';

const textProps: TextProps = {
  h3: true,
};

export const Title = styled(Text).attrs(() => ({
  ...textProps,
}))<TextProps>`
  margin: 40px 0;
  text-align: center;
`;
