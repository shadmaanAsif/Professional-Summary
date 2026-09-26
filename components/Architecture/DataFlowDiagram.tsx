import styles from './Architecture.module.css'

const CLIENTS = ['Client A', 'Client B', 'Client C']
const COL_X = [20, 230, 440]
const COL_W = 180
const CENTER_X = 320

export default function DataFlowDiagram() {
  return (
    <svg
      className={styles.canvas}
      viewBox="0 0 760 380"
      role="img"
      aria-label="Diagram showing multiple concurrent clients reading from a shared MobX and React Query store, backed by Node.js API orchestration, with a continuous polling loop keeping pricing and availability data in sync."
    >
      <defs>
        <marker id="arrow-flow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={styles.arrowheadFill} />
        </marker>
        <marker id="arrow-flow-accent" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={styles.arrowheadFillAccent} />
        </marker>
      </defs>

      <text x="20" y="14" className={styles.groupLabel}>
        CONCURRENT CLIENTS → SHARED STORE → API ORCHESTRATION
      </text>

      {CLIENTS.map((client, i) => (
        <g key={client}>
          <rect x={COL_X[i]} y="20" width={COL_W} height="50" rx="8" className={styles.box} />
          <text x={COL_X[i] + COL_W / 2} y="50" className={styles.boxLabel}>
            {client}
          </text>
          <line
            x1={COL_X[i] + COL_W / 2}
            y1="70"
            x2={CENTER_X}
            y2="110"
            className={styles.connector}
            markerEnd="url(#arrow-flow)"
          />
        </g>
      ))}

      <rect x="20" y="110" width="600" height="60" rx="10" className={styles.boxAccent} />
      <text x={CENTER_X} y="143" className={styles.boxLabelAccent}>
        Client Store — MobX + React Query
      </text>

      <line x1={CENTER_X} y1="170" x2={CENTER_X} y2="210" className={styles.connector} markerEnd="url(#arrow-flow)" />

      <rect x="20" y="210" width="600" height="60" rx="10" className={styles.box} />
      <text x={CENTER_X} y="243" className={styles.boxLabel}>
        Node.js API Orchestration
      </text>

      <line x1={CENTER_X} y1="270" x2={CENTER_X} y2="300" className={styles.connector} markerEnd="url(#arrow-flow)" />

      <rect x="20" y="300" width="600" height="50" rx="10" className={styles.box} />
      <text x={CENTER_X} y="330" className={styles.boxLabel}>
        Pricing &amp; Availability Data
      </text>

      <path
        d="M 620,325 C 700,325 700,140 620,140"
        className={styles.connectorDashed}
        markerEnd="url(#arrow-flow-accent)"
      />
      <text
        x="716"
        y="232"
        className={styles.boxSubLabel}
        transform="rotate(-90 716 232)"
      >
        CONTINUOUS POLL / SYNC
      </text>
    </svg>
  )
}
