import React from 'react';
import { Button, ButtonMode } from '../../../../shared/ui/Button';
import { useAppDispatch } from '../../../../shared/hooks/redux';
import { removeLast } from '../../../../entities/card/model/cardSlice';

type Props = {};

export const RemoveCard = ({}: Props) => {
  const dispatch = useAppDispatch();
  const removeItem = () => {
    dispatch(removeLast());
  };

  return (
    <Button label="remove" mode={ButtonMode.secondary} onPress={removeItem} />
  );
};
