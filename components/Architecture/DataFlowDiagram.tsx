import { canvas, box, boxAccent, boxLabel, boxLabelAccent, boxSubLabel, groupLabel, connector, connectorDashed, arrowheadFill, arrowheadFillAccent } from './diagram-styles'

const CLIENTS = ['Client 1', 'Client 2', 'Client N']
const COL_X = [20, 230, 440]
const COL_W = 180
const CENTER_X = 320

export default function DataFlowDiagram() {
  return (
    <svg
      className={canvas}
      viewBox="0 0 760 290"
      role="img"
      aria-label="Conceptual diagram showing multiple concurrent clients reading from a MobX and React Query client store, with WebSocket, SSE, and polling-driven updates keeping pricing and availability data in sync."
    >
      <defs>
        <marker id="arrow-flow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowheadFill} />
        </marker>
        <marker id="arrow-flow-accent" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowheadFillAccent} />
        </marker>
      </defs>

      <text x="20" y="14" className={groupLabel}>
        CONCURRENT CLIENTS → CLIENT STORE → LIVE DATA
      </text>

      {CLIENTS.map((client, i) => (
        <g key={client}>
          <rect x={COL_X[i]} y="20" width={COL_W} height="50" rx="8" className={box} />
          <text x={COL_X[i] + COL_W / 2} y="50" textAnchor="middle" className={boxLabel}>
            {client}
          </text>
          <line
            x1={COL_X[i] + COL_W / 2}
            y1="70"
            x2={CENTER_X}
            y2="110"
            className={connector}
            markerEnd="url(#arrow-flow)"
          />
        </g>
      ))}

      <rect x="20" y="110" width="600" height="60" rx="10" className={boxAccent} />
      <text x={CENTER_X} y="143" textAnchor="middle" className={boxLabelAccent}>
        Client Store — MobX + React Query
      </text>

      <line x1={CENTER_X} y1="170" x2={CENTER_X} y2="210" className={connector} markerEnd="url(#arrow-flow)" />

      <rect x="20" y="210" width="600" height="60" rx="10" className={box} />
      <text x={CENTER_X} y="245" textAnchor="middle" className={boxLabel}>
        Pricing &amp; Availability Data
      </text>

      <path
        d="M 620,240 C 700,240 700,140 620,140"
        className={connectorDashed}
        markerEnd="url(#arrow-flow-accent)"
      />
      <text
        x="716"
        y="190"
        textAnchor="middle"
        className={boxSubLabel}
        transform="rotate(-90 716 190)"
      >
        WEBSOCKET / SSE / POLLING
      </text>
    </svg>
  )
}
