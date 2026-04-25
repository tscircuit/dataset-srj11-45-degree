import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -8.4, pcbY: -2.1, padWidth: 5.3, padHeight: 0.75, pcbRotation: 45 },
  { name: "OBS2", pcbX: -5.9, pcbY: 0.9, padWidth: 0.75, padHeight: 6.2 },
  { name: "OBS3", pcbX: -5.9, pcbY: 0.9, padWidth: 0.75, padHeight: 7.2 },
  { name: "OBS4", pcbX: -1.2, pcbY: 2.7, padWidth: 5.8, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS5", pcbX: 1.2, pcbY: -2.2, padWidth: 7, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS6", pcbX: 5, pcbY: 2, padWidth: 7.8, padHeight: 0.85, pcbRotation: 45 },

  { name: "_OBS1", pcbX: -8.4, pcbY: -2.1, padWidth: 5.3, padHeight: 0.75, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS2", pcbX: -5.9, pcbY: 0.9, padWidth: 0.75, padHeight: 6.2, layer: "bottom" },
  { name: "_OBS3", pcbX: -5.9, pcbY: 0.9, padWidth: 0.75, padHeight: 7.2, layer: "bottom" },
  { name: "_OBS4", pcbX: -1.2, pcbY: 2.7, padWidth: 5.8, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS5", pcbX: 1.2, pcbY: -2.2, padWidth: 7, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS6", pcbX: 5, pcbY: 2, padWidth: 7.8, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },
] as const

/** Ten-obstacle rising diagonal weave with scattered blockers on the route. */
export default () => (
  <SingleTraceBoard
    width={29}
    height={10}
    start={{ x: -13, y: -4.4 }}
    end={{ x: 13, y: 4.4 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
