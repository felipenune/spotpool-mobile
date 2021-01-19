import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import SpotPool from '../../assets/SpotPool.png';

import { Container, FilterContainer, Logo } from './styles';

interface IProps {
  children: ReactNode;
  isVisible: boolean;
  setFiltersVisible(value: boolean): void;
}

const Header: React.FC<IProps> = ({ children, isVisible, setFiltersVisible }: IProps) => (
  <Container>
    <FilterContainer>
      <Logo source={SpotPool} />

      {!isVisible ? (
        <Feather name="filter" color="#FFF" size={scale(28)} onPress={() => setFiltersVisible(!isVisible)} />
      ) : (
        <Feather name="x" color="#FFF" size={scale(32)} onPress={() => setFiltersVisible(!isVisible)} style={{ marginTop: '5%', marginBottom: 20 }} />
      )}
    </FilterContainer>

    {children}
  </Container>
);

export default Header;
