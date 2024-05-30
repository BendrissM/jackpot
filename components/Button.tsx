import {
  FC,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  useTransition,
} from "react";

const Button: FC<
  PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: string;
  }>
> = ({ children, onClick, className }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    startTransition(() => {
      onClick(e);
    });
  };

  return (
    <>
      <button className={className} onClick={handleClick} disabled={isPending}>
        {children} {isPending ? "loading..." : null}
      </button>
    </>
  );
};

export default Button;
