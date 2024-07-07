import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function VirtualKeyboard() {
  const handleKeyPress = (pressedKey: string) => {
    // TODO: handle key press and set changes in context, remove console.log()
    console.log(pressedKey);
  };

  return (
    <Keyboard
      layout={{
        default: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "{ent} Z X C V B N M {backspace}",
        ],
      }}
      display={{
        "{ent}": "ENTER",
        "{backspace}": "⌫",
      }}
      onKeyPress={handleKeyPress}
    />
  );
}
