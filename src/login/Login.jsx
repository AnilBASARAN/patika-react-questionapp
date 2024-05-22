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
       <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEX///9ES/7/wWL///3//v9DSv///v3///s6Qv5MU//8//+tsP///f++vv80Pf/i4/9AR/6DiP5ES/vMy//w8P//v116fv//u1b/v2O1uv8zO///vlymqv79wV3n6P79wWKUlv39v1f+8t//x28vNf394LOKjv/90Yx0eP1SWf//5cL/9+7Mz/05Rf/9+/T+6Mf91pr/yXv/9OT/1qf979L84rdqb/yYo/z83aa2u//81pTd4/omLf5eYf3/zI5lav/Q0/r8zHSYm/ydovjt7v+8v/cZJ//+uk/78dP5zn3/7d3/xnenSExSAAAOP0lEQVR4nO2aDVvaPBfHA2mTLtZSKqUV6LpSBBVBYc65F2+51d08bt//+zznJAUp6sQ927N5X+e365qCaZt/cnJekjJGEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEC8EyZlV/CosgMPP39qhnwiXHAA5RiH8JgDrX6MPpkpohZxL/AQCjVIpf2uvfh6cCamtkkuFn9XNa0OD/wqJsAL0c+S02x1KpuAjt6S12oQLycUaUoClwST80CPltldBAqeGN5C25yBeXVhPXvx8cNj46UmeZFGWJfnbUwVflRcEt1htp8TR0WsXerrecNNHim3Pt4GKpxVar2wt2K//DEH3nmYp/i6fZ0kch9U4TrJ5fqiUcsutxNZnr0zLOXtfkz825oKbObTtO4WocfRLFEp2mkdxWq3G1Sr+l4ZhlHdZyfq4lFuOfQf2LbB9p7df22DdCAmOhfGV+UYrxfsEwVJhgJ9//hxCALLUeaS1rZJEewq8wVIlePEtp/IAdmsL/OB316KQ7i7yYXd3Od+cG4UV26xD9kpP4S+wUmUpaxCFybrCMI3OmRTqKYXQyd7uE97Gkq7T0nbdW843Z9stcwfvlysUH6MYTbRMGifzczTgJxRWgord+/T9OVTCDXT37crdiPFtvawd7/MvVsjUHizB9N4cgsZq9E49OIf+CPFNpwP4fPZ9f2pxVUG/Gdijuy9lrYNsdToN8WsVTucPqCvIhst1s6LQr/eR+kXLhxlElc5r3UlhHIqJ5hBQtRAhFHfNHAaVkcRERlgKHDDXWRqsdGMnqwol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" alt="patika plus logo photo" />
      <button onClick={buttonClicked} id="start">
        Teste Başla!
      </button>
      <p className="login-para">QuestionApp 10 Sorudan olusuyor.
      Herbir soruyu cevaplamak icin 30 saniyen var. 10 saniyeden sonra cevap verebileceksin. 
      Sonuc kısmında puanını ve yanlis cevapladigin soruların dogru cevaplarini bulacaksin. Basarilar....</p>
    </div>
  );
}

export default Login;
