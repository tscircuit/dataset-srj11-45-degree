import { DiagonalTwinPadObstacle, SingleTraceBoard } from "./common"

/** Falling tunnel mirrored with diagonal twin-pad stretches and an about-0.1mm sliver in each stretch. */
export default () => (
  <SingleTraceBoard
    width={19}
    height={9}
    start={{ x: -7.4, y: 1.5 }}
    end={{ x: 7.4, y: -1.5 }}
  >
    <DiagonalTwinPadObstacle
      name="OBS1"
      pcbX={-2.25}
      pcbY={-2.25}
      padSize={1.9}
      gap={0.11}
      stretchRotation={45}
      padRotation={0}
    />
    <DiagonalTwinPadObstacle
      name="OBS2"
      pcbX={2.25}
      pcbY={2.25}
      padSize={1.9}
      gap={0.11}
      stretchRotation={45}
      padRotation={0}
    />
  </SingleTraceBoard>
)
