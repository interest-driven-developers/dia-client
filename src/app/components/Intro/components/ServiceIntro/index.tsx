"use client";
import React from "react";
import Typed from "typed.js";

export default function ServiceIntro() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "개발자 모의면접 플랫폼",
        "개발자 채용 플랫폼",
        "개발자 커뮤니티",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);
  return <span className="whitespace-pre" ref={el} />;
}
