import { useEffect, useState } from "react";

export default function PasswordInput({ ...props }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="is-flex is-flex-direction-row">
      <input
        className="input"
        type={passwordShown ? "text" : "password"}
        {...props}
      />
      <button
        type="button"
        onClick={togglePassword}
        className="button has-background-transparent"
      >
        {passwordShown ? (
          <ion-icon name="eye-off-outline"></ion-icon>
        ) : (
          <ion-icon name="eye-outline"></ion-icon>
        )}
      </button>
    </div>
  );
}
