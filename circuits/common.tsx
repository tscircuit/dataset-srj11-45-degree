type Point = {
  x: number
  y: number
}

type SingleTraceBoardProps = {
  width: number | string
  height: number | string
  start: Point
  end: Point
  traceRouteHints?: Point[]
  children?: any
}

type RotatedPadObstacleProps = {
  name: string
  pcbX: number
  pcbY: number
  padWidth?: number | string
  padHeight?: number | string
  pcbRotation?: number
}

export const SingleTraceBoard = ({
  width,
  height,
  start,
  end,
  traceRouteHints,
  children,
}: SingleTraceBoardProps) => (
  <board
    width={width}
    height={height}
    layers={1}
    autorouter="sequential-trace"
    defaultTraceWidth="0.15mm"
  >
    <testpoint
      name="TP1"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.1mm"
      layer="top"
      pcbX={start.x}
      pcbY={start.y}
    />
    <testpoint
      name="TP2"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.1mm"
      layer="top"
      pcbX={end.x}
      pcbY={end.y}
    />
    {children}
    <trace from="TP1.pin1" to="TP2.pin1" pcbRouteHints={traceRouteHints} />
  </board>
)

export const RotatedPadObstacle = ({
  name,
  pcbX,
  pcbY,
  padWidth = 2.4,
  padHeight = 2.4,
  pcbRotation = 45,
}: RotatedPadObstacleProps) => (
  <chip
    name={name}
    pcbX={pcbX}
    pcbY={pcbY}
    pcbRotation={pcbRotation}
    pinLabels={{ pin1: "OBSTACLE" }}
    pinAttributes={{ OBSTACLE: { doNotConnect: true } }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          shape="rect"
          width={padWidth}
          height={padHeight}
        />
      </footprint>
    }
  />
)
