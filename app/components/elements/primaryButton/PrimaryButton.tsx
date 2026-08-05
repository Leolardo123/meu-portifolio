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
        rounded-[20px] 
        border border-(--font-dark) 
        py-1.75 px-3.5 
        transition-all duration-200
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