import { RotatedPadObstacle, SingleTraceBoard } from "./common"

/** Mirrored long tunnel using two bars rotated the opposite direction. */
export default () => (
  <SingleTraceBoard
    width={19}
    height={8.1}
    start={{ x: -7.4, y: 1.3 }}
    end={{ x: 7.4, y: -1.3 }}
  >
    <RotatedPadObstacle
      name="OBS1"
      pcbX={-1.9}
      pcbY={-1.95}
      padWidth={4.1}
      padHeight={1}
      pcbRotation={-45}
    />
    <RotatedPadObstacle
      name="OBS2"
      pcbX={1.9}
      pcbY={1.95}
      padWidth={4.1}
      padHeight={1}
      pcbRotation={-45}
    />
  </SingleTraceBoard>
)

