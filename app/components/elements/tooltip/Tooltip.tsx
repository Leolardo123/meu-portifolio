import React from 'react'

interface TooltipProps {
    content: string;
}

export default function Tooltip({ content }: TooltipProps) {
  return (
    <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all">
      <div className="w-1 h-0.5 border-secondary-3 border-l-5 border-l-transparent border-r-5 border-r-transparent border-b-5"></div>
      <p className="bg-secondary-3 p-2 rounded-md">{content}</p>
    </div>
  );
}
