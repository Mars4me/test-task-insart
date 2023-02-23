import React, { useEffect, useRef, useState } from 'react';
import { validation } from '../../../utils';

interface useControlledInputReturn {
    value: number;
    isHover: boolean;
    isValid: boolean;
    isEditing: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    inputListeners: {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    };
    wrapperListeners: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    handleEditClick: () => void;
    handleCancelClick: () => void;
    handleSaveClick: () => void;
}

export const useControlledInput = (defaultValue: number): useControlledInputReturn => {
    const [value, setValue] = useState<number>(defaultValue);
    const [isEditing, setIsEditing] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isValid, setIsValid] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = () => {
        setIsValid(true);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setValue(inputRef.current?.valueAsNumber || value);
        setIsEditing(false);
        setIsHover(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setIsHover(false);
    };

    const handleEditTempValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (inputRef.current) {
            if (!validation(value, event.target.valueAsNumber)) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
            inputRef.current.value = event.target.value;
        }
    };

    const handleInputFocusOut = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const elementTitle = event.relatedTarget?.getAttribute('title');
        if (elementTitle === 'save' || elementTitle === 'cancel') {
            return false;
        } else {
            handleCancelClick();
        }
    };

    const handleKeyboardEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (isValid) {
                handleSaveClick();
            }
        } else if (event.key === 'Escape') {
            handleCancelClick();
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.valueAsNumber = value;
            if (isEditing) {
                inputRef.current.focus();
            }
        }
    }, [isEditing, value]);

    return {
        value,
        isHover,
        isValid,
        isEditing,
        inputRef,
        inputListeners: {
            onChange: handleEditTempValue,
            onKeyDown: handleKeyboardEdit,
            onBlur: handleInputFocusOut,
        },
        wrapperListeners: {
            onMouseEnter: () => setIsHover(true),
            onMouseLeave: () => setIsHover(false),
        },
        handleEditClick,
        handleCancelClick,
        handleSaveClick,
    };
};
