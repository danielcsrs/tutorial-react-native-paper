import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph, Button, TextInput} from 'react-native-paper';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Title>APP Tutorial Paper</Title>
      <Paragraph>Informe seu e-mail e senha para se autenticar.</Paragraph>
      <TextInput
        mode="outlined"
        placeholder="Digite seu e-mail"
        label="Digite seu e-mail"
        style={styles.input}
        autoCapitalize="none"
        disabled={loading}
      />
      <TextInput
        mode="outlined"
        placeholder="Digite sua senha"
        label="Digite sua senha"
        style={styles.input}
        disabled={loading}
        secureTextEntry={true}
      />
      <Button
        loading={loading}
        disabled={loading}
        mode="contained"
        onPress={onLogin}>
        Login
      </Button>
      <Button style={styles.signupButton} onPress={() => {}}>
        Crie sua conta
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  input: {
    paddingBottom: 15,
  },
  signupButton: {
    paddingTop: 30,
  },
});
