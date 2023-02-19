import { getMiddlewareRouteMatcher } from "next/dist/shared/lib/router/utils/middleware-route-matcher";
import React, { useEffect, useState } from "react";

export default function PanelGauche() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("AAA AAAA fxgdfg");
  const [index, setIndex] = useState(0);

  const [glitch, setGlitch] = useState(true);

  //afficahge des lettres
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index]);

  //effect glitch aléatoire
  useEffect(() => {
    setTimeout(() => {
      setGlitch(!glitch);
    }, 1000 * Math.random());
  }, [glitch]);

  return (
    // l'image dez fond a un ratio de 5/7
    <div
      style={{
        top: "15vh",
        left: "5%",
        width: "20%",
        aspectRatio:"5/7",
        zIndex:"5"
      }}
      className="fixed"
    >
      <div
        style={{
          backgroundImage: "url('fondSF.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor:"black",
          fontFamily: "scifi",
          lineHeight: "2.5",
          padding: "25px",
          position:"absolute",
          width:"100%",
          height:"100%",
          zIndex:1000,
          backgroundClip: "border-box"
        }}
      >
        <div id="glitchbody2">
          <div className="glitch">
            <div className={glitch ? "line" : ""}>{text}</div>
            {glitch ? (
              <>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
                <div className="line">{text}</div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
