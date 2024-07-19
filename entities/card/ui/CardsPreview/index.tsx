import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAppSelector } from '../../../../shared/hooks/redux';
import { selectAllCard } from '../../model/selectors';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
  LinearTransition,
} from 'react-native-reanimated';

type Props = {};

export const CardsPreview = ({}: Props) => {
  const allCard = useAppSelector(selectAllCard);

  return (
    <ScrollView>
      <View style={styles.container}>
        {allCard.map((card) => {
          return (
            <Animated.View
              key={card.id}
              entering={LightSpeedInLeft.duration(500)}
              exiting={LightSpeedOutRight.duration(500)}
              layout={LinearTransition.duration(500)}
              style={[styles.item, { backgroundColor: card.bgr }]}
            >
              <Text>{card.title}</Text>
            </Animated.View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '20%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
