import { isEmptyString } from "@/utils/index";
import { FormInputProps } from "@/utils/interface";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormInput = ({
  type,
  label,
  value,
  error,
  placeholder,
  inputType,
  onChange,
}: FormInputProps) => {

  const inputStyle = isEmptyString(error ?? "")
    ? styles.input
    : styles.inputInvalid;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>*</Text>
        </Text>
        {inputType === "textarea" ? (
          <TextInput
            style={[inputStyle, styles.textArea]}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onChange(text)}
            multiline={true}
            numberOfLines={4}
          />
        ) : (
          <TextInput
            style={inputStyle}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onChange(text)}
            keyboardType={type === "email" ? "email-address" : "default"}
          />
        )}
        <Text style={styles.errorText}>{error ?? ""}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -12,
    paddingHorizontal: 32,
  },
  labelContainer: {
    marginBottom: 15,
  },
  label: {
    textTransform: "capitalize",
    color: "#4a4a4a",
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 8,
  },
  required: {
    color: "#F15846",
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#f3f4f6",
    color: "#4a4a4a",
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  inputInvalid: {
    backgroundColor: "#f3f4f6",
    color: "#4a4a4a",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  errorText: {
    color: "#b91c1c",
    fontSize: 12,
  },
});

export default FormInput;
