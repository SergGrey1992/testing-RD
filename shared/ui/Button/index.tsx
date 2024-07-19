import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';

export enum ButtonMode {
  primary = 'primary',
  secondary = 'secondary',
}

type Props = {
  label: string;
  mode?: ButtonMode;
} & TouchableOpacityProps;

export const Button = ({
  label,
  mode = ButtonMode.primary,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.common, styles[mode]]}
      activeOpacity={0.6}
    >
      <Text style={[stylesText.text, stylesText[mode]]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  common: {
    flex: 1,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0046ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#0046ff',
  },
  secondary: {},
});

const stylesText = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  primary: {
    color: 'white',
  },
  secondary: {
    color: '#0046ff',
  },
});
