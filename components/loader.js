import { useContext } from "react";
import Conditional from "./conditional";
import { LoadingContext } from "../contexts/loadingContext";

export default function Loader(props) {
  const { isLoading } = useContext(LoadingContext);

  return (
    <Conditional when={isLoading} else={props.children}>
      <p>Loading...</p>
    </Conditional>
  );
}
