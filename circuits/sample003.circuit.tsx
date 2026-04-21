import { RotatedPadObstacle, SingleTraceBoard } from "./common"

/** Narrower rising tunnel that depends more heavily on a 45-degree pass. */
export default () => (
  <SingleTraceBoard
    width={19}
    height={8.8}
    start={{ x: -7.4, y: -1.5 }}
    end={{ x: 7.4, y: 1.5 }}
  >
    <RotatedPadObstacle name="OBS1" pcbX={-2.25} pcbY={2.25} padWidth={2.7} />
    <RotatedPadObstacle name="OBS2" pcbX={2.25} pcbY={-2.25} padWidth={2.7} />
  </SingleTraceBoard>
)

