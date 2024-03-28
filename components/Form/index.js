import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.length === 0) {
      alert("Vui lòng nhập công việc!");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Enter Todo..."
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <KeyboardAvoidingView
          style={styles.button}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={32}
        >
          <Text style={styles.icon}>+</Text>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
