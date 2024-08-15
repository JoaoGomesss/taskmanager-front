import "./CustomInput.scss";

const CustomInput = ({ label, value, handleTaskAddition, onEnterPress }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onEnterPress();
        }
    };
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                onChange={(e) => handleTaskAddition(e)}
                value={value}
                onKeyDown={(e) => handleKeyDown(e)}
            />

            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};
export default CustomInput;
