import { useSession } from "next-auth/react";
import { useLayoutEffect, useRef, useState } from "react";

const useNewTweetForm = () => {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // TODO: Delete this later
  // const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
  //   console.log("textA: ", textArea);
  //   updateTextAreaSize(textArea);
  //   textAreaRef.current = textArea;
  // }, []);

  function handleSetInputValue(value: string) {
    setInputValue(value);
  }

  function updateTextAreaSize(textArea?: HTMLTextAreaElement | null) {
    if (textArea == null) return;
    textArea.style.height = "0";
    textArea.style.height = `${textArea.scrollHeight}px`;
  }

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);

  return {
    handleSetInputValue,
    session,
    textAreaRef,
    updateTextAreaSize,
  };
};

export { useNewTweetForm };
