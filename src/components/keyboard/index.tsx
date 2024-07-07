import VirtualKeyboard from "./VirtualKeyboard";
import WindowKeyPressHandler from "./WindowKeyPressHandler";

export default function Keyboard() {
  return (
    <>
      <WindowKeyPressHandler />
      <VirtualKeyboard />
    </>
  );
}
