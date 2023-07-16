import { Button } from "../Button";
import { ProfileImage } from "../Image/ProfileImage";
import { useNewTweetForm } from "./useNewTweetForm";
import { TextArea } from "./TextArea";
import { Loader } from "../Loader";

export const NewTweetForm = () => {
  const { handleSetInputValue, handleSubmit, session, textAreaRef } =
    useNewTweetForm();

  if (session.status !== "authenticated")
    return (
      <div className="flex min-h-[8rem] items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <form
      className="flex flex-col gap-2 border-b px-4 py-2"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <TextArea
          ref={textAreaRef}
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
