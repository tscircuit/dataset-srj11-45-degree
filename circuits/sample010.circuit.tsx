import { RotatedPadObstacle, SingleTraceBoard } from "./common"

/** Narrower rising tunnel between two long tilted pads. */
export default () => (
  <SingleTraceBoard
    width={19}
    height={8.5}
    start={{ x: -7.4, y: -1.3 }}
    end={{ x: 7.4, y: 1.3 }}
  >
    <RotatedPadObstacle
      name="OBS1"
      pcbX={-2}
      pcbY={2}
      padWidth={4.35}
      padHeight={1}
      pcbRotation={45}
    />
    <RotatedPadObstacle
      name="OBS2"
      pcbX={2}
      pcbY={-2}
      padWidth={4.35}
      padHeight={1}
      pcbRotation={45}
    />
  </SingleTraceBoard>
)
