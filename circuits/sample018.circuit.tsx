import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -2.1, pcbY: 2.6, padWidth: 10.5, padHeight: 0.7, pcbRotation: 45 },
  { name: "OBS2", pcbX: 2.1, pcbY: 2.6, padWidth: 10.5, padHeight: 0.7, pcbRotation: -45 },
  { name: "OBS3", pcbX: 11.1, pcbY: -2.7, padWidth: 10.5, padHeight: 0.7, pcbRotation: -45 },
  { name: "OBS4", pcbX: 2.1, pcbY: -2.2, padWidth: 10.5, padHeight: 0.7, pcbRotation: 45 },

  { name: "_OBS1", pcbX: -2.1, pcbY: 2.6, padWidth: 10.5, padHeight: 0.7, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS2", pcbX: 2.1, pcbY: 2.6, padWidth: 10.5, padHeight: 0.7, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS3", pcbX: 11.1, pcbY: -2.7, padWidth: 10.5, padHeight: 0.7, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 2.1, pcbY: -2.2, padWidth: 10.5, padHeight: 0.7, pcbRotation: 45, layer: "bottom" },

] as const

/** Ten-obstacle guarded ring aperture with sentries in the corridor. */
export default () => (
  <SingleTraceBoard
    width={34}
    height={14}
    start={{ x: -13, y: 0 }}
    end={{ x: 13, y: 0 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
