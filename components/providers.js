export default function Providers({ providers, children }) {
  return providers.reverse().reduce((wrapped, Provider) => {
    return <Provider>{wrapped}</Provider>;
  }, children);
}
