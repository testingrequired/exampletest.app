import { useEffect } from "react";
import { useRouter } from "next/router";
import { useConfigContext } from "../../../contexts/configContext";
import { useChanceContext } from "../../../contexts/chanceContext";
export default function AdminPostsPage() {
  const router = useRouter();
  const { seed, setSeed } = useChanceContext();
  const { config, setConfigValue } = useConfigContext();

  useEffect(() => {
    if (router.query.payload) {
      const data = JSON.parse(window.atob(router.query.payload));

      if (data.config) {
        Object.keys(data.config).forEach(key => {
          setConfigValue(key, data.config[key]);
        });
      }

      if (data.seed) {
        setSeed(data.seed);
      }

      router.push("/_");
    } else {
      console.log("No payload found!");
    }
  }, [seed, config]);

  return null;
}
