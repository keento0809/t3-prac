import { forwardRef, type ChangeEventHandler } from "react";

type TextAreaProps = {
  placeHolder?: string;
  onChangeFunc: ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ onChangeFunc, ...props }, ref) => {
    const { className = "", placeHolder = "What's happening?" } = props;
    return (
      <>
        <textarea
          ref={ref}
          onChange={onChangeFunc}
          placeholder={placeHolder}
          className={`${className}`}
          {...props}
        />
      </>
    );
  }
);

TextArea.displayName = "TextArea";
