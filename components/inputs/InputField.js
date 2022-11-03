export default function InputField({ children, labelName, ...props }) {
  return (
    <div className="field">
      {labelName && (
        <label {...props.helperText} className="label">
          {labelName}
        </label>
      )}
      <div className="control">{children}</div>
    </div>
  );
}
