import { useContext, useEffect } from "react";
import Conditional from "./conditional";
import { LoadingContext } from "../contexts/loadingContext";
import { ConfigContext } from "../contexts/configContext";

export default function Loader(props) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { config } = useContext(ConfigContext);

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
