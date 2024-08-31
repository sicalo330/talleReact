import React from "react";
import { Button } from "react-native";

function ThemeSwitcher({ onSwitch }) {
  return (
    <Button title="Switch Theme" onPress={onSwitch} />
  );
}

export default ThemeSwitcher;
