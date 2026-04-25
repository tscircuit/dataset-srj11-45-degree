import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -6.1, pcbY: 2, padWidth: 5.8, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS2", pcbX: -3.3, pcbY: -1.3, padWidth: 8, padHeight: 0.8, pcbRotation: 45 },
  { name: "OBS3", pcbX: 3.8, pcbY: 1.3, padWidth: 8, padHeight: 0.8, pcbRotation: -45 },
  { name: "OBS4", pcbX: 7.9, pcbY: -3, padWidth: 2.8, padHeight: 0.8, pcbRotation: 45 },


  { name: "_OBS1", pcbX: -6.1, pcbY: 2, padWidth: 5.8, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS2", pcbX: -3.3, pcbY: -1.3, padWidth: 8, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS3", pcbX: 3.8, pcbY: 1.3, padWidth: 8, padHeight: 0.8, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 7.9, pcbY: -3, padWidth: 2.8, padHeight: 0.8, pcbRotation: 45, layer: "bottom" },

] as const

/** Ten-obstacle broken fence that forces repeated gap selection. */
export default () => (
  <SingleTraceBoard
    width={29}
    height={9}
    start={{ x: -13, y: 0.3 }}
    end={{ x: 13, y: -0.3 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
