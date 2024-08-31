import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import UserDetail from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleTex';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';

export default function App() {
  const task = { title: 'Un titulo', completed: true };
  const message = "Un mensaje para el alerta"
  const [userData, setData] = useState(null);
  const [theme, setTheme] = useState(false); // false para tema claro, true para tema oscuro

  const handleRegister = (data) => {
    setData(data);
  };

  const switchTheme = () => {
    if(theme){
      setTheme(false)
    }
    else{
      setTheme(true)
    }
  };

  // Estilos dinámicos basados en el estado del tema
  const containerStyle = theme ? styles.darkContainer : styles.lightContainer;

  return (
    <View style={containerStyle}>
      <Greeting name="pepe" />
      <UserDetail name="pepe" age="50" job="Desarrollador" />
      <Task task={task} />
      <ToggleText />
      <DynamicForm />
      <ClickCounter />
      <RegistrationForm onRegister={handleRegister} />
      {userData && (
        <View>
          <Text>{userData.mail}</Text>
          <Text>{userData.password}</Text>
        </View>
      )}
      <ThemeSwitcher onSwitch={switchTheme} />
      <AlertButton message={message} />
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
