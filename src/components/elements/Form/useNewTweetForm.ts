import { useSession } from "next-auth/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const useNewTweetForm = () => {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  function handleSetInputValue(value: string) {
    setInputValue(value);
  }

  function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
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
    inputRef,
    textAreaRef,
    updateTextAreaSize,
  };
};

export { useNewTweetForm };
