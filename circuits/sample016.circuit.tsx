import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -3.1, pcbY: 0.2, padWidth: 8.8, padHeight: 0.8, },
  { name: "OBS2", pcbX: -0.9, pcbY: 1.5, padWidth: 7.8, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS3", pcbX: 3.2, pcbY: -2.1, padWidth: 5.8, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS4", pcbX: 11, pcbY: 0, padWidth: 7.9, padHeight: 0.8 },


  { name: "_OBS1", pcbX: -3.1, pcbY: 0.2, padWidth: 8.8, padHeight: 0.8, layer: "bottom" },
  { name: "_OBS2", pcbX: -0.9, pcbY: 1.5, padWidth: 7.8, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS3", pcbX: 3.2, pcbY: -2.1, padWidth: 5.8, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS4", pcbX: 11, pcbY: 0, padWidth: 7.9, padHeight: 0.8, layer: "bottom" },

] as const

/** Ten-obstacle island cluster threaded through alternating openings. */
export default () => (
  <SingleTraceBoard
    width={29}
    height={9}
    start={{ x: -13, y: 0 }}
    end={{ x: 13, y: 0 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
