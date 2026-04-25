import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -7, pcbY: 2.8, padWidth: 10.3, padHeight: 0.75, pcbRotation: -45 },
  { name: "OBS2", pcbX: -1.1, pcbY: -1.8, padWidth: 10.9, padHeight: 0.7, pcbRotation: 45 },
  { name: "OBS3", pcbX: 6.6, pcbY: -3.1, padWidth: 10.3, padHeight: 0.75, pcbRotation: -45 },
  { name: "OBS4", pcbX: 10.8, pcbY: 2.8, padWidth: 10.6, padHeight: 0.85, pcbRotation: 45 },

  { name: "_OBS1", pcbX: -7, pcbY: 2.8, padWidth: 10.3, padHeight: 0.75, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS2", pcbX: -1.1, pcbY: -1.8, padWidth: 10.9, padHeight: 0.7, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS3", pcbX: 6.6, pcbY: -3.1, padWidth: 10.3, padHeight: 0.75, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 10.8, pcbY: 2.8, padWidth: 10.6, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },

] as const

/** Ten-obstacle asymmetric scatter field blocking a diagonal net. */
export default () => (
  <SingleTraceBoard
    width={36}
    height={14}
    start={{ x: -14, y: -4.5 }}
    end={{ x: 14, y: 2.8 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
