import { useEffect } from "react";
import { useRouter } from "next/router";
import { useConfigContext } from "../../contexts/configContext";
import { useChanceContext } from "../../contexts/chanceContext";
import useQueryParams from "../../hooks/useQueryParams";

export default function AdminPostsPage() {
  const router = useRouter();
  const { seed, setSeed } = useChanceContext();
  const { config, setConfigValue } = useConfigContext();

  const query = useQueryParams(router.asPath);

  useEffect(() => {
    const data = JSON.parse(window.atob(query.payload));

    if (data.config) {
      Object.keys(data.config).forEach(key => {
        setConfigValue(key, data.config[key]);
      });
    }

    if (data.seed) {
      setSeed(data.seed);
    }

    router.push("/_");
  }, [seed, config]);

  return null;
}
