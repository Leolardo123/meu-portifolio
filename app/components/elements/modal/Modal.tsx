import React, { JSX, useState } from 'react'
import { twMerge } from 'tailwind-merge';

interface ModalProps {
    children: any;
    onClose: () => void;
    className?:  string;
}

export default function Modal({ children, className, onClose }: ModalProps) {
  return (
    <div className="fixed flex items-center justify-center w-full h-full top-[50%] left-[50%] translate-[-50%] z-999 shadow-2xl bg-[rgba(0,0,0,.5)]">
      <div
        className={twMerge(
          "relative p-8 min-h-2/4 w-[calc(100%-30px)] max-w-295 rounded-2xl",
          className,
        )}
      >
        <button
          onClick={onClose}
          className="text-2xl rounded-4xl p-2 hover:bg-secondary-1 border border-black absolute top-4 right-4"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
