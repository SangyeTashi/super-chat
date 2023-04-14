import { FaDiceSix, FaSpinner } from 'react-icons/fa';
import React from 'react';
type ButtonProps = {
    isLoading: boolean;
    text: string;
    disabled?: boolean;
    handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
    isLoading = false,
    text,
    disabled = false,
    handleClick,
}) => {
    return (
        <button
            className="py-2 flex justify-center bg-green_accent px-3 rounded-xl hover:bg-green_accent/90  disabled:bg-tertiary_dark"
            onClick={handleClick}
            disabled={disabled}
        >
            {isLoading && <FaSpinner size={22} className="animate-spin " />}
            {disabled && 'Passwords do not match'}
            {!(disabled || isLoading) && text}
        </button>
    );
};
export default Button;
