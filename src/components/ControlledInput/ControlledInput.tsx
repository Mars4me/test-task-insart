import { GoPencil } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { mergeClassName } from '../../utils';
import { CustomCopmonentProps } from '../../interfaces';
import { useControlledInput } from './useControlledInput';

interface ControlledInputProps extends CustomCopmonentProps {
    initialValue?: number;
    size?: keyof typeof Size;
    numbersAfterDot?: number;
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

export const ControlledInput: React.FC<ControlledInputProps> = ({
    initialValue,
    size,
    className,
    numbersAfterDot,
}) => {
    const {
        value,
        isEditing,
        isValid,
        inputRef,
        isHover,
        handleCancelClick,
        handleSaveClick,
        handleEditClick,
        inputListeners,
        wrapperListeners,
    } = useControlledInput(initialValue || 0);

    return (
        <div
            className={mergeClassName(
                `relative flex h-full  overflow-hidden ${size ? getTextSizeClass(size) : 'text-xl'}`,
                className
            )}
        >
            {isEditing ? (
                <div className="relative flex w-full p-5">
                    {!isValid && (
                        <span className="absolute top-0 text-xs text-red-300">
                            Allowed value is 10% more\less
                        </span>
                    )}

                    <input
                        className={`w-[calc(100%_-_5px)] px-2 focus:rounded-sm ${
                            isValid ? 'focus:outline-[#1E90FF]' : 'focus:outline-[#ce4949]'
                        } text-center`}
                        ref={inputRef}
                        type="number"
                        step={0.01}
                        min={0}
                        {...inputListeners}
                    />
                    <button
                        title="save"
                        className={`absolute p-1 text-xs top-2 right-5 hover:bg-green-300 ${
                            isValid ? 'bg-white' : 'pointer-events-none bg-gray-300'
                        }`}
                        onClick={handleSaveClick}
                        disabled={!isValid}
                    >
                        <AiOutlineCheck size={16} color="deepskyblue" style={{ strokeWidth: '60px' }} />
                    </button>
                    <button
                        title="cancel"
                        className="absolute right-0 p-1 text-xs bg-transparent bg-white top-2 hover:bg-zinc-300"
                        onClick={handleCancelClick}
                    >
                        <AiOutlineClose size={16} color="#FF5733" style={{ strokeWidth: '60px' }} />
                    </button>
                </div>
            ) : (
                <div className="relative flex p-5 mx-auto overflow-hidden w-fit" {...wrapperListeners}>
                    <span
                        onClick={handleEditClick}
                        className="flex items-center px-2 truncate hover:bg-zinc-200 hover:rounded-sm"
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
