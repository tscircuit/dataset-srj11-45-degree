import { RotatedPadObstacle, SingleTraceBoard } from "./common"

/** Wide rising tunnel between two diamond obstacles. */
export default () => (
  <SingleTraceBoard
    width={19}
    height={8.4}
    start={{ x: -7.4, y: -1.5 }}
    end={{ x: 7.4, y: 1.5 }}
  >
    <RotatedPadObstacle name="OBS1" pcbX={-2.3} pcbY={2.3} padWidth={2.35} />
    <RotatedPadObstacle name="OBS2" pcbX={2.3} pcbY={-2.3} padWidth={2.35} />
  </SingleTraceBoard>
)

