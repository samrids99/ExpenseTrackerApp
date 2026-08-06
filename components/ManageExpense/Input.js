import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, style, invalid, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }

  if (invalid) {
    inputStyles.push(styles.inavlidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colours.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colours.primary100,
    color: GlobalStyles.colours.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colours.error500,
  },
  inavlidInput: {
    backgroundColor: GlobalStyles.colours.error50,
  },
});
