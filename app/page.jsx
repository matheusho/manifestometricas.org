import { Authors } from "./components/authors";
import { Blockquote } from "./components/blockquote";
import { Metrics } from "./components/metrics";
import { Mission } from "./components/mission";

export default function Home() {
  return (
    <main>
      <Mission />
      <Metrics />
      <Blockquote />
      <Authors />
    </main>
  );
}
