import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -8.3, pcbY: 0.6, padWidth: 5.2, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS2", pcbX: -3, pcbY: 0.5, padWidth: 13, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS3", pcbX: 1.3, pcbY: -1.2, padWidth: 7.5, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS4", pcbX: 6.1, pcbY: -3.1, padWidth: 5.1, padHeight: 0.8, pcbRotation: -45 },

  { name: "_OBS1", pcbX: -8.3, pcbY: 0.6, padWidth: 5.2, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS2", pcbX: -3, pcbY: 0.5, padWidth: 13, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS3", pcbX: 1.3, pcbY: -1.2, padWidth: 7.5, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 6.1, pcbY: -3.1, padWidth: 5.1, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },

] as const

/** Ten-obstacle falling diagonal weave through alternating blockers. */
export default () => (
  <SingleTraceBoard
    width={28}
    height={11}
    start={{ x: -13, y: 4.4 }}
    end={{ x: 10, y: -4.4 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
