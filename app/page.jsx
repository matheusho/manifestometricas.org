import { Blockquote } from './components/blockquote'
import { Metrics } from './components/metrics'
import { Mission } from './components/mission'

export default function Home() {
  return (
    <main>
      <Mission />
      <Metrics />
      <Blockquote />
    </main>
  )
}
