import React, { useEffect, useRef, useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { mergeClassName } from '../../utils';
import { CustomCopmonentProps } from '../../interfaces';

interface ControlledInputProps extends CustomCopmonentProps {
    initialValue?: string;
    size?: keyof typeof Size;
}

enum Size {
    xxl = 'xxl',
    xl = 'xl',
    lg = 'lg',
    md = 'md',
    sm = 'sm',
}
const getTextSizeClass = (size: keyof typeof Size) => {
    switch (size) {
        case Size.xxl:
            return 'text-2xl';
        case Size.xl:
            return 'text-xl';
        case Size.lg:
            return 'text-lg';
        case Size.md:
            return 'text-base';
        case Size.sm:
            return 'text-sm';
        default:
            return 'text-base';
    }
};

export const ControlledInput: React.FC<ControlledInputProps> = ({ initialValue, size, className }) => {
    const [value, setValue] = useState(initialValue || '');
    const [isEditing, setIsEditing] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setValue(inputRef.current?.value || value);
        setIsEditing(false);
        setIsHover(false);
    };

    const handleEditTempValue = (tempValue: React.ChangeEvent<HTMLInputElement>) => {
        if (inputRef.current) {
            inputRef.current.value = tempValue.target.value;
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setIsHover(false);
    };

    const handleKeyboardEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSaveClick();
        } else if (e.key === 'Escape') {
            handleCancelClick();
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = value;
            if (isEditing) {
                inputRef.current.focus();
            }
        }
    }, [isEditing, value]);

    return (
        <div
            className={mergeClassName(
                `relative flex h-full overflow-hidden ${size ? getTextSizeClass(size) : 'text-xl'}`,
                className
            )}
        >
            {isEditing ? (
                <div className="relative flex w-full p-5">
                    <input
                        className="w-[calc(100%_-_5px)] px-2  focus:rounded-sm focus:outline-[#1E90FF]"
                        ref={inputRef}
                        type="text"
                        onChange={handleEditTempValue}
                        onKeyDown={handleKeyboardEdit}
                    />
                    <button
                        title="save"
                        className="absolute p-1 text-xs bg-transparent bg-white top-2 right-5 hover:bg-zinc-300"
                        onClick={handleSaveClick}
                    >
                        <AiOutlineCheck size={16} color="deepskyblue" style={{ strokeWidth: '60px' }} />
                    </button>
                    <button
                        title="cancel editing"
                        className="absolute right-0 p-1 text-xs bg-transparent bg-white top-2 hover:bg-zinc-300"
                        onClick={handleCancelClick}
                    >
                        <AiOutlineClose size={16} color="#FF5733" style={{ strokeWidth: '60px' }} />
                    </button>
                </div>
            ) : (
                <div
                    className="relative flex p-5 overflow-hidden w-fit"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <span
                        onClick={handleEditClick}
                        className="px-2 truncate hover:bg-zinc-200 hover:rounded-sm"
                    >
                        {value}
                    </span>
                    {isHover && (
                        <button
                            title="click to edit note"
                            className="absolute p-1 text-xs bg-transparent right-2 top-2 hover:bg-zinc-300"
                            onClick={handleEditClick}
                        >
                            <GoPencil size={14} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
