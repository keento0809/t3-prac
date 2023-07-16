import { useSession, type SessionContextValue } from "next-auth/react";
import {
  useLayoutEffect,
  useRef,
  useState,
  type MutableRefObject,
  type FormEvent,
} from "react";
import { api } from "y/utils/api";

type NewTweetFormState = {
  handleSetInputValue: (value: string) => void;
  handleSubmit: (e: FormEvent) => void;
  session: SessionContextValue;
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  updateTextAreaSize: (textArea?: HTMLTextAreaElement | null) => void;
};

const useNewTweetForm = (): NewTweetFormState => {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // TODO: Delete this later
  // const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
  //   console.log("textA: ", textArea);
  //   updateTextAreaSize(textArea);
  //   textAreaRef.current = textArea;
  // }, []);

  const createTweet = api.tweet.create.useMutation({
    onSuccess: (newTweet) => {
      console.log(newTweet);
      if (textAreaRef.current !== null) textAreaRef.current.value = "";
    },
    onError: (error) => {
      console.log(error instanceof Error && error.message);
    },
  });

  function handleSetInputValue(value: string) {
    setInputValue(value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createTweet.mutate({ content: inputValue });
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
    handleSubmit,
    session,
    textAreaRef,
    updateTextAreaSize,
  };
};

export { useNewTweetForm };
