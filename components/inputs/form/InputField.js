export default function InputField({ children, labelName, justifyContent, ...props }) {
  return (
    <div className="field mb-5">
      {labelName && (
        <label {...props.helperText} className="label">
          {labelName}
        </label>
      )}
      <div className={`control w-full flex flex-row ${justifyContent && justifyContent}`}>{children}</div>
    </div>
  );
}
