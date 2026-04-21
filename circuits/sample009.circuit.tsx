import { RotatedPadObstacle, SingleTraceBoard } from "./common"

/** Two rising diamond tunnels in sequence for a simple slalom. */
export default () => (
  <SingleTraceBoard
    width={27}
    height={9.2}
    start={{ x: -11, y: -1.4 }}
    end={{ x: 11, y: 1.4 }}
    traceRouteHints={[
      { x: -3.4, y: -0.3 },
      { x: 3.4, y: 0.3 },
    ]}
  >
    <RotatedPadObstacle name="OBS1" pcbX={-5.2} pcbY={2.6} padWidth={2.2} />
    <RotatedPadObstacle name="OBS2" pcbX={-1.8} pcbY={-2.6} padWidth={2.2} />
    <RotatedPadObstacle name="OBS3" pcbX={1.8} pcbY={2.6} padWidth={2.2} />
    <RotatedPadObstacle name="OBS4" pcbX={5.2} pcbY={-2.6} padWidth={2.2} />
  </SingleTraceBoard>
)
