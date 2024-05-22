import React from "react";
import "./Login.css";
import { useContext } from "react";
import { appContext } from "../context/AppContext";


function Login() {
  const { setIsAppVisible } = useContext(appContext);

  function buttonClicked() {
    setIsAppVisible((prev) => !prev);
  }

  return (
    <div className="login">
       <img className="logo" src="/src/assets/patika-logo.png" alt="" />
      <button onClick={buttonClicked} id="start">
        Teste Başla!
      </button>
      <p className="login-para">QuestionApp 10 Sorudan olusmaktadir. Her soru ekranda 30 sn kalicak ve ilk 10 sn cevap siklarini goremiceksin. Sorulari cevapladiktan sonra Puan'ını ve Dogru/Yanlis cevaplarini goruyor olucaksin. Basarilar diliyorum....</p>
    </div>
  );
}

export default Login;
