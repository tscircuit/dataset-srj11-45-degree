import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -10.8, pcbY: -0.6, padWidth: 1.6, padHeight: 1.6 },
  { name: "OBS2", pcbX: -6.4, pcbY: 1.7, padWidth: 3.9, padHeight: 0.9, pcbRotation: -45 },
  { name: "OBS3", pcbX: -6, pcbY: -2.2, padWidth: 3.1, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS4", pcbX: -3.6, pcbY: 0.2, padWidth: 3.1, padHeight: 0.8 },
  { name: "OBS5", pcbX: -0.6, pcbY: 2.15, padWidth: 2.4, padHeight: 0.9, pcbRotation: -45 },
  { name: "OBS6", pcbX: 1.2, pcbY: -1.9, padWidth: 3.5, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS7", pcbX: 3.6, pcbY: -0.5, padWidth: 4, padHeight: 0.8 },
  { name: "OBS8", pcbX: 3.6, pcbY: -0.5, padWidth: 4, padHeight: 0.8 },
  { name: "OBS9", pcbX: 6, pcbY: 2.40, padWidth: 2, padHeight: 0.9, pcbRotation: 45 },
  { name: "OBS10", pcbX: 8.4, pcbY: -1.7, padWidth: 3.1, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS11", pcbX: 10.8, pcbY: 0, padWidth: 2, padHeight: 2 },

  { name: "_OBS1", pcbX: -10.8, pcbY: -0.6, padWidth: 1.6, padHeight: 1.6, layer: "bottom" },
  { name: "_OBS2", pcbX: -6.4, pcbY: 1.7, padWidth: 3.9, padHeight: 0.9, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS3", pcbX: -6, pcbY: -2.2, padWidth: 3.1, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS4", pcbX: -3.6, pcbY: 0.2, padWidth: 3.1, padHeight: 0.8, layer: "bottom" },
  { name: "_OBS5", pcbX: -0.6, pcbY: 2.15, padWidth: 2.4, padHeight: 0.9, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS6", pcbX: 1.2, pcbY: -1.9, padWidth: 3.5, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS7", pcbX: 3.6, pcbY: -0.5, padWidth: 4, padHeight: 0.8, layer: "bottom" },
  { name: "_OBS8", pcbX: 3.6, pcbY: -0.5, padWidth: 4, padHeight: 0.8, layer: "bottom" },
  { name: "_OBS9", pcbX: 6, pcbY: 2.40, padWidth: 2, padHeight: 0.9, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS10", pcbX: 8.4, pcbY: -1.7, padWidth: 3.1, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS11", pcbX: 10.8, pcbY: 0, padWidth: 2, padHeight: 2, layer: "bottom" },

] as const

/** Ten-obstacle horizontal weave with blockers across the centerline. */
export default () => (
  <SingleTraceBoard
    width={32}
    height={7}
    start={{ x: -13, y: 0 }}
    end={{ x: 13, y: 0 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
