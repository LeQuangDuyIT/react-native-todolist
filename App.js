import { Text, View, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import styles from "./app.component.style";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleDeleteTodo = (deleteIndex) => {
    Alert.alert("Xóa Todo", "Bạn có chắc muốn xóa Todo này?", [
      {
        text: "Đóng",
        onPress: () => {},
      },
      {
        text: "Xóa",
        onPress: () => {
          const newList = todoList.filter((_, index) => index !== deleteIndex);
          setTodoList(newList);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView>
          <View style={styles.list}>
            {todoList.map((todo, index) => (
              <TodoItem
                key={index}
                order={index + 1}
                todo={todo}
                onDeteleTodo={() => handleDeleteTodo(index)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Form onSubmit={handleAddTodo} />
    </View>
  );
};

export default App;
