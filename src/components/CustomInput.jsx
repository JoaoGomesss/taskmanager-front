import "./CustomInput.scss";

const CustomInput = ({ label, value, handleTaskAddition }) => {
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                onChange={(e) => handleTaskAddition(e)}
                value={value}
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
