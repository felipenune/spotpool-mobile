import React from 'react';
import { Feather } from '@expo/vector-icons';
import { WarningContainer, WarningText } from './styles';

const Warning: React.FC = () => (
  <WarningContainer>
    <Feather name="frown" color="#FFF" size={50} />
    <WarningText>None playlist was found!</WarningText>
  </WarningContainer>
);

export default Warning;
