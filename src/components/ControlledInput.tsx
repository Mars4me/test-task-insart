import React, { useEffect, useRef, useState } from 'react';

interface ControlledInputProps {
    initialValue: string;
}

const ControlledInput: React.FC<ControlledInputProps> = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue);
    const [tempValue, setTempValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // додаткові дії для збереження введеного тексту
        setValue(tempValue);
        setIsEditing(false);
        setIsHover(false);
    };

    const handleCancelClick = () => {
        // додаткові дії для відміни введення тексту
        setTempValue(value);
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
            inputRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className="controlled-input overflow-hidden w-full h-full">
            {isEditing ? (
                <div className="relative w-fit h-fit flex p-5 max-w-[200px]">
                    <input
                        className="max-w-[90%] px-3"
                        ref={inputRef}
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        onKeyDown={handleKeyboardEdit}
                    />
                    <button
                        title="save"
                        className="absolute right-4 text-xs bg-transparent p-0 hover:bg-zinc-300"
                        onClick={handleSaveClick}
                    >
                        ✔️
                    </button>
                    <button
                        title="cancel editing"
                        className="absolute right-0 text-xs bg-transparent p-0 hover:bg-zinc-300"
                        onClick={handleCancelClick}
                    >
                        ❌
                    </button>
                </div>
            ) : (
                <div
                    className="relative max-w-[200px] w-fit h-fit flex p-5 overflow-hidden"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <span onClick={handleEditClick} className="truncate px-3">
                        {value}
                    </span>
                    {isHover && (
                        <button
                            title="click to edit note"
                            className="absolute right-0 text-xs bg-transparent p-0 hover:bg-zinc-300"
                            onClick={handleEditClick}
                        >
                            📝
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ControlledInput;
