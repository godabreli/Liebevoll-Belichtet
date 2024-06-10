import { useState } from "react";
import "./Kontakt.css";

export const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const disabled = name === "" || email === "" || message === "";
  const [inputDisabled, setInputDisabled] = useState(false);
  const [onBlurName, setOnBlurName] = useState(false);
  const [onBlurEmail, setOnBlurEmail] = useState(false);
  const [onBlurMessage, setOnBlurMessage] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    const emailData = { name, email, message };
    setIsLoading(true);
    setInputDisabled(true);

    setTimeout(() => {
      const sendEmail = async function () {
        try {
          await fetch(" http://localhost:5000/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
          });
        } catch (err) {
          console.log(err);
        }
      };

      sendEmail();
      setName("");
      setEmail("");
      setMessage("");
      setIsLoading(false);
      setInputDisabled(false);
      setOnBlurName(false);
      setOnBlurEmail(false);
      setOnBlurMessage(false);
    }, 3000);
  };

  return (
    <div className="kontaktFormWrapper">
      <form className="kontaktForm" onSubmit={handleSubmit}>
        <span className={onBlurName && name === "" ? "label-rot" : "label"}>
          DEIN NAME:
        </span>
        <input
          onBlur={() => setOnBlurName(true)}
          disabled={inputDisabled}
          className="name"
          name="name"
          value={name}
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <span className={onBlurEmail && email === "" ? "label-rot" : "label"}>
          E-MAIL:
        </span>
        <input
          onBlur={() => setOnBlurEmail(true)}
          disabled={inputDisabled}
          className="email"
          name="email"
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <span
          className={onBlurMessage && message === "" ? "label-rot" : "label"}
        >
          DEINE NACHRICHT:
        </span>
        <textarea
          onBlur={() => setOnBlurMessage(true)}
          disabled={inputDisabled}
          className="message"
          name="message"
          value={message}
          type="textarea"
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          className={disabled ? "sendButton sendButton-disabled" : "sendButton"}
          disabled={disabled}
        >
          <div
            className={
              isLoading ? "spinnerDiv spinnerDiv-drehen" : "spinnerDiv"
            }
          >
            <span className={isLoading ? "icon-spinner6 spinner" : ""}>
              {isLoading ? "" : "ABSENDEN"}
            </span>
          </div>
        </button>
      </form>
    </div>
  );
};
