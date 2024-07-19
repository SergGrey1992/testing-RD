import React from 'react';
import { Button } from '../../../../shared/ui/Button';
import { useAppDispatch } from '../../../../shared/hooks/redux';
import uuid from 'react-native-uuid';
import { getRandomColor } from '../../../../shared/utils/randomColor';
import { unshiftOne } from '../../../../entities/card/model/cardSlice';
import { getRandomName } from '../../../../shared/utils/randomName';

type Props = {};

export const AddCard = ({}: Props) => {
  const dispatch = useAppDispatch();
  const addNewItem = () => {
    dispatch(
      unshiftOne({
        id: uuid.v1().toString(),
        title: getRandomName(),
        bgr: getRandomColor(),
      })
    );
  };

  return <Button label="create" onPress={addNewItem} />;
};
