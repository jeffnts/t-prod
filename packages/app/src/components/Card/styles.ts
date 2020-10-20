import styled from 'styled-components/native';

import {Button as RNIButton, ButtonProps} from 'react-native-elements';

type WrapperProps = {
  status: string;
};

const getStatus = (status: string) => {
  switch (status) {
    case 'inProgress':
      return '1px solid orange';

    case 'done':
      return '1px solid green';
  }
};

export const Wrapper = styled.View<WrapperProps>`
  margin: 10px 0;
  border: ${(props) => getStatus(props.status)};
  border-radius: 6px;
`;

export const Content = styled.View`
  margin: 10px 20px;
`;

export const Item = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-weight: 700;
  margin-right: 5px;
`;

interface ButtonInterface extends ButtonProps {
  status: string;
}

const getColor = (status: string) => {
  switch (status) {
    case 'inProgress':
      return 'orange';

    case 'done':
      return 'green';
  }
};

const buttonProps = (props: {status: string}): ButtonProps => {
  return {
    buttonStyle: {
      backgroundColor: getColor(props.status),
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  };
};

export const Button = styled(RNIButton).attrs((props: ButtonInterface) => ({
  ...buttonProps(props),
}))<ButtonInterface>``;
