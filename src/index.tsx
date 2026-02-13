import { useState } from "react";
import { render, Text, Box } from "ink";
import TextInput from "ink-text-input";
import BigText from "ink-big-text";

const App = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  const [step, setStep] = useState<"color" | "text" | "display">("color");

  const handleColorSubmit = (value: string) => {
    setColor(value);
    setStep("text");
  };

  const handleTextSubmit = (value: string) => {
    setText(value.replace(/\\n/g, '\n'));
    setStep("display");
  };

  return (
    <Box flexDirection="column">
      {step === "color" ? (
        <Box flexDirection="column">
          <Text>Enter color: </Text>
          <Box borderStyle="round" borderColor="cyan" paddingX={1}>
            <TextInput value={color} onChange={setColor} onSubmit={handleColorSubmit} />
          </Box>
        </Box>
      ) : (
        <Text>Enter color: {color}</Text>
      )}

      {step === "text" && (
        <Box flexDirection="column" marginTop={1}>
          <Text>Enter text: </Text>
          <Box borderStyle="round" borderColor="cyan" paddingX={1}>
            <TextInput value={inputText} onChange={setInputText} onSubmit={handleTextSubmit} />
          </Box>
        </Box>
      )}

      {step === "display" && (
        <>
          <Text>Enter text: {text}</Text>
          <Box marginTop={1}>
            <BigText text={text} font="block" colors={[color]} />
          </Box>
        </>
      )}
    </Box>
  );
};

render(<App />);
