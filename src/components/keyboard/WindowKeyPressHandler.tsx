import { useEffect } from "react";

export default function WindowKeyPressHandler() {
  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      // TODO: handle key press and set changes in context, remove console.log()
      if (e.key === "Backspace") {
        console.log("BackSpace -> pressed");
      }
      if (e.key === "Enter") {
        console.log("Enter -> pressed");
      }

      const isValidLetter = /^[a-zA-Z]+$/.test(e.key) && e.key.length === 1;
      if (!isValidLetter) return;
    };

    window.addEventListener("keydown", keyPressHandler);
    return () => window.removeEventListener("keydown", keyPressHandler);
  }, []);

  return null;
}
