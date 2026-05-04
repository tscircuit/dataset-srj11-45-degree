import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -12, pcbY: 2.7, padWidth: 10.9, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS2", pcbX: -7.4, pcbY: -3.4, padWidth: 9.1, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS3", pcbX: 1.2, pcbY: 0.5, padWidth: 18, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS4", pcbX: 11.5, pcbY: 3.6, padWidth: 8.5, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS5", pcbX: 14, pcbY: -2, padWidth: 9.1, padHeight: 0.85, pcbRotation: 45 },

  { name: "_OBS1", pcbX: -12, pcbY: 2.7, padWidth: 10.9, padHeight: 0.85, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS2", pcbX: -7.4, pcbY: -3.4, padWidth: 9.1, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS3", pcbX: 1.2, pcbY: 0.5, padWidth: 18, padHeight: 0.85, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 11.5, pcbY: 3.6, padWidth: 8.5, padHeight: 0.85, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS5", pcbX: 14, pcbY: -2, padWidth: 9.1, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },
] as const

/** Ten-obstacle shelf field with blockers forcing alternating side escapes. */
export default () => (
  <SingleTraceBoard
    width={36}
    height={14}
    start={{ x: -14, y: -4.4 }}
    end={{ x: 14, y: 4.4 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
