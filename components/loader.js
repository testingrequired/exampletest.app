import { useEffect } from "react";
import Conditional from "./design/conditional";
import { useLoadingContext } from "../contexts/loadingContext";
import { useConfigContext } from "../contexts/configContext";

export default function Loader(props) {
  const { isLoading, setIsLoading } = useLoadingContext();
  const { config } = useConfigContext();

  useEffect(() => {
    const { loadingJitter: jitter, loadingDelay: delay } = config;
    const loadingDelay = jitter ? Math.random() * (delay - 0) + 0 : delay;
    setTimeout(() => setIsLoading(true));
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  return (
    <Conditional when={isLoading} else={props.children}>
      <p>Loading...</p>
    </Conditional>
  );
}
