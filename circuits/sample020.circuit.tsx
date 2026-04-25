import { RotatedPadObstacle, SingleTraceBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -11.2, pcbY: 2.7, padWidth: 10.7, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS2", pcbX: -8.8, pcbY: -0.7, padWidth: 10, padHeight: 0.7, pcbRotation: -45 },
  { name: "OBS3", pcbX: -1.2, pcbY: -2.9, padWidth: 10.9, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS4", pcbX: 3.8, pcbY: 2.8, padWidth: 10.9, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS5", pcbX: 6.3, pcbY: -1.8, padWidth: 10.9, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS6", pcbX: 11.2, pcbY: 2.7, padWidth: 10.7, padHeight: 0.85, pcbRotation: 45 },


  { name: "_OBS1", pcbX: -11.2, pcbY: 2.7, padWidth: 10.7, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS2", pcbX: -8.8, pcbY: -0.7, padWidth: 10, padHeight: 0.7, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS3", pcbX: -1.2, pcbY: -2.9, padWidth: 10.9, padHeight: 0.85, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS4", pcbX: 3.8, pcbY: 2.8, padWidth: 10.9, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },
  { name: "_OBS5", pcbX: 6.3, pcbY: -1.8, padWidth: 10.9, padHeight: 0.85, pcbRotation: -45, layer: "bottom" },
  { name: "_OBS6", pcbX: 11.2, pcbY: 2.7, padWidth: 10.7, padHeight: 0.85, pcbRotation: 45, layer: "bottom" },

] as const

/** Ten-obstacle zigzag maze with blockers placed in every corridor segment. */
export default () => (
  <SingleTraceBoard
    width={36}
    height={14}
    start={{ x: -14, y: -4.8 }}
    end={{ x: 15, y: 4.6 }}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </SingleTraceBoard>
)
