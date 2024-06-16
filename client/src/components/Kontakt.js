import { useState } from "react";
import "./Kontakt.css";
import { motion } from "framer-motion";

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
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const fetchURL =
    process.env.NODE_ENV === "production"
      ? "/api/sendEmail"
      : " http://localhost:3001/api/sendEmail";

  const handleSubmit = function (e) {
    e.preventDefault();
    const emailData = { name, email, message };

    setIsLoading(true);
    setInputDisabled(true);

    const sendEmail = async function () {
      try {
        const status = await fetch(fetchURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });
        const answer = await status.json();
        console.log(answer);
        await reset();
        if (answer.status === "YES") {
          setPopupMessage(
            "Deine Nachricht wurde gesendet. Ich melde mich schnellst möglich zurück."
          );
        } else {
          setPopupMessage(
            "Es gab Probleme beim versenden. Bitte versuche es noch ein Mal. Du erreichst mich auch unter der Nummer +491794839729"
          );
          console.log(answer.error);
        }
        setPopupVisible(!popupVisible);
        // setTimeout(() => {
        //   setPopupVisible(false);
        // }, 6000);
      } catch (err) {
        console.log(err);
      }
    };

    const reset = function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setIsLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setOnBlurName(false);
          setOnBlurEmail(false);
          setOnBlurMessage(false);
          resolve();
        }, 2000);
      });
    };

    sendEmail();
  };

  return (
    <div className="kontaktFormWrapper">
      <Popup />

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

  function Popup() {
    return (
      <motion.div
        className={"popupMessage"}
        initial={{ opacity: 0 }}
        animate={{ opacity: popupVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>{popupMessage}</p>
        <button
          className="popupButton"
          onClick={() => {
            setPopupVisible(!popupVisible);
            setInputDisabled(false);
          }}
        >
          OK
        </button>
      </motion.div>
    );
  }
};
