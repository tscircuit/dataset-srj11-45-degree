import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -6.4, pcbY: 3.1, padWidth: 10, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS2", pcbX: -3.9, pcbY: -1.6, padWidth: 10.2, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS3", pcbX: 3.9, pcbY: 1.6, padWidth: 10.2, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS4", pcbX: 6.4, pcbY: -3.1, padWidth: 10, padHeight: 0.8, pcbRotation: 45 },


  { name: "_OBS1", pcbX: -6.4, pcbY: 3.1, padWidth: 10, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS2", pcbX: -3.9, pcbY: -1.6, padWidth: 10.2, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS3", pcbX: 3.9, pcbY: 1.6, padWidth: 10.2, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 6.4, pcbY: -3.1, padWidth: 10, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
] as const

/** Ten-tooth comb maze with alternating 45-degree sliver gates. */
export default () => (
  <SingleTraceBoard
    width={36}
    height={14}
    start={{ x: -14, y: 0.4 }}
    end={{ x: 14, y: -0.4 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
