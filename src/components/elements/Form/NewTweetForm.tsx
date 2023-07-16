import { Button } from "../Button";
import { ProfileImage } from "../Image/ProfileImage";
import { useNewTweetForm } from "./useNewTweetForm";
import { TextArea } from "./Textarea";

export const NewTweetForm = () => {
  const { session } = useNewTweetForm();

  if (session.status !== "authenticated")
    return (
      // TODO: Replace this div to Loader component
      <div className="flex min-h-[8rem] items-center justify-center">
        Loading...
      </div>
    );

  return <Form />;
};

const Form = () => {
  const { handleSetInputValue, inputRef, session, textAreaRef } =
    useNewTweetForm();

  if (session.status !== "authenticated") return null;

  const handleTestSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(textAreaRef.current?.value);
  };

  return (
    <form
      className="flex flex-col gap-2 border-b px-4 py-2"
      onSubmit={handleTestSubmit}
    >
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <TextArea
          ref={inputRef}
          onChangeFunc={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleSetInputValue(e.target.value)
          }
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
};
