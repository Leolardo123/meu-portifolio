interface PrimaryButtonProps {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({ title, isActive, onClick }: PrimaryButtonProps) {
  const isActiveStyle = () => isActive ?? `bg-primary`;

  return (
    <button
      onClick={onClick}
      className={`rounded-[20px] border border-(--font-dark) py-1.75 px-3.5 ${isActiveStyle()}`}
    >
      {title}
    </button>
  );
}
