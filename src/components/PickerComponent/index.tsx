import { Picker } from '@react-native-picker/picker';
import { PickerProps } from '@react-native-picker/picker/typings/Picker';
import React, { PropsWithChildren } from 'react';

import { Container, PickerStyled } from './styles';

interface IOptions {
  value: string;
  name: string;
}

interface IProps extends PickerProps {
  defaultValue: string;
  options: IOptions[];
}

const PickerComponent: React.FC<IProps> = ({
  defaultValue,
  options,
  ...rest
}: PropsWithChildren<IProps>) => (
  <Container>
    <PickerStyled {...rest} itemStyle={{ fontFamily: 'Roboto' }}>
      <Picker.Item label={defaultValue.charAt(0).toUpperCase() + defaultValue.slice(1)} value="" />

      {options.map((value) => (
        <Picker.Item key={value.value} label={value.name} value={value.value} />
      ))}
    </PickerStyled>
  </Container>
);

export default PickerComponent;
