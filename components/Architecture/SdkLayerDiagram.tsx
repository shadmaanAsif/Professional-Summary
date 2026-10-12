import { canvas, box, boxAccent, boxLabel, boxLabelAccent, boxSubLabel, groupLabel, connector, divider, arrowheadFill } from './diagram-styles'

// Generic client-application ids (1, 2, N) - deliberately makes no claim about how many clients exist.
const CLIENTS = ['1', '2', 'N']
const COL_X = [20, 230, 440]
const COL_W = 180
const CENTER_X = 320

export default function SdkLayerDiagram() {
  return (
    <svg
      className={canvas}
      viewBox="0 0 640 468"
      role="img"
      aria-label="Diagram showing multiple client applications each duplicating UI and business logic before, versus those client applications sharing one SDK abstraction layer and one shared business logic layer after."
    >
      <defs>
        <marker id="arrow-sdk" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowheadFill} />
        </marker>
      </defs>

      <text x="20" y="14" className={groupLabel}>
        BEFORE — DUPLICATED PER CLIENT
      </text>

      {CLIENTS.map((client, i) => (
        <g key={`before-${client}`}>
          <text x={COL_X[i] + COL_W / 2} y="34" textAnchor="middle" className={boxSubLabel}>
            CLIENT APP {client}
          </text>
          <rect x={COL_X[i]} y="42" width={COL_W} height="50" rx="8" className={box} />
          <text x={COL_X[i] + COL_W / 2} y="72" textAnchor="middle" className={boxLabel}>
            UI
          </text>
          <rect x={COL_X[i]} y="104" width={COL_W} height="50" rx="8" className={box} />
          <text x={COL_X[i] + COL_W / 2} y="134" textAnchor="middle" className={boxLabel}>
            Business Logic
          </text>
        </g>
      ))}

      <line x1="20" y1="178" x2="620" y2="178" className={divider} />
      <text x="20" y="200" className={groupLabel}>
        AFTER — SHARED SDK ABSTRACTION LAYER
      </text>

      {CLIENTS.map((client, i) => (
        <g key={`after-${client}`}>
          <rect x={COL_X[i]} y="216" width={COL_W} height="46" rx="8" className={box} />
          <text x={COL_X[i] + COL_W / 2} y="244" textAnchor="middle" className={boxLabel}>
            Client {client} UI
          </text>
          <line
            x1={COL_X[i] + COL_W / 2}
            y1="262"
            x2={CENTER_X}
            y2="300"
            className={connector}
            markerEnd="url(#arrow-sdk)"
          />
        </g>
      ))}

      <rect x="20" y="300" width="600" height="56" rx="10" className={boxAccent} />
      <text x={CENTER_X} y="333" textAnchor="middle" className={boxLabelAccent}>
        SDK Abstraction Layer
      </text>

      <line x1={CENTER_X} y1="356" x2={CENTER_X} y2="392" className={connector} markerEnd="url(#arrow-sdk)" />

      <rect x="20" y="392" width="600" height="56" rx="10" className={box} />
      <text x={CENTER_X} y="425" textAnchor="middle" className={boxLabel}>
        Shared Business Logic
      </text>
    </svg>
  )
}
