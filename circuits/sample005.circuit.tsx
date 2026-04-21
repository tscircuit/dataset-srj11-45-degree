import { RotatedPadObstacle, SingleTraceBoard } from "./common"

/** Asymmetric rising tunnel with a larger entry diamond and smaller exit pinch. */
export default () => (
  <SingleTraceBoard
    width={19}
    height={8.9}
    start={{ x: -7.4, y: -1.4 }}
    end={{ x: 7.4, y: 1.4 }}
  >
    <RotatedPadObstacle name="OBS1" pcbX={-2.45} pcbY={2.35} padWidth={2.65} />
    <RotatedPadObstacle name="OBS2" pcbX={2.55} pcbY={-2.45} padWidth={2.2} />
  </SingleTraceBoard>
)
