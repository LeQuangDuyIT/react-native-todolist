import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const TodoItem = ({ todo, order, onDeteleTodo }) => {
  const orderText = order < 10 ? `0${order}` : order;
  const orderBg = order % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity onPress={onDeteleTodo}>
      <View style={styles.item}>
        <Text style={[styles.number, orderBg]}>{orderText}</Text>
        <Text style={styles.content}>{todo}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
