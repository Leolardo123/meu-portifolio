interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="rounded-[20px] border border-(--font-dark) py-1.75 px-3.5"
    >
      {props.title}
    </button>
  );
}
