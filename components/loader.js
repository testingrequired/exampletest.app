import { useEffect } from "react";
import Conditional from "./design/conditional";
import { useLoadingContext } from "../contexts/loadingContext";
import { useConfigContext } from "../contexts/configContext";
import Overlay from "../components/design/overlay";
import styled from "styled-components";

const LoadingIcon = styled.span`
  font-size: 5em;

  animation: icon-spin infinite 2s linear;

  @keyframes icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

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
      <Overlay>
        <LoadingIcon>🍋</LoadingIcon>
      </Overlay>
    </Conditional>
  );
}
