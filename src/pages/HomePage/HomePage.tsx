import AboutMe from "components/AboutMe";
import Projects from "components/Projects";
import TechStack from "components/TechStack";
import { useEffect, useState } from "react";

export function HomePage() {
  const [olv, setOlv] = useState(0);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOlv(1);
    })
  }, [])

  return (
    <>
      <AboutMe />
      <Projects />
      <TechStack />
    </>
  );
}
