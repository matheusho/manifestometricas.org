import { authors } from 'lib/authors';
import { Authors } from 'ui/authors';
import { Blockquote } from 'ui/blockquote';
import { Metrics } from 'ui/metrics';
import { Mission } from 'ui/mission';

export default function Home() {
  return (
    <>
      <Mission />
      <Metrics />
      <Blockquote />
      <Authors authors={authors} />
    </>
  );
}
