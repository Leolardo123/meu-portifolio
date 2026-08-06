interface PrimaryButtonProps {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({ title, isActive, onClick }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-4xl
        border border-(--font-dark) 
        py-1.75 px-3.5 
        whitespace-nowrap
        transition-all 
        hover:-translate-y-1
        ${
          isActive ? 
          'bg-black text-primary' : 
          'hover:bg-secondary-1'
        }
      `}
    >
      {title}
    </button>
  );
}