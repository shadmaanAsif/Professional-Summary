import styles from './Architecture.module.css'

const PLATFORMS = ['iOS', 'Android', 'Desktop']
const COL_X = [20, 230, 440]
const COL_W = 180
const CENTER_X = 320

export default function SdkLayerDiagram() {
  return (
    <svg
      className={styles.canvas}
      viewBox="0 0 640 468"
      role="img"
      aria-label="Diagram showing three client applications each duplicating UI and business logic before, versus all three sharing one SDK abstraction layer and one business logic service after."
    >
      <defs>
        <marker id="arrow-sdk" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={styles.arrowheadFill} />
        </marker>
      </defs>

      <text x="20" y="14" className={styles.groupLabel}>
        BEFORE — DUPLICATED PER PLATFORM
      </text>

      {PLATFORMS.map((platform, i) => (
        <g key={`before-${platform}`}>
          <text x={COL_X[i] + COL_W / 2} y="34" className={styles.boxSubLabel}>
            {platform.toUpperCase()}
          </text>
          <rect x={COL_X[i]} y="42" width={COL_W} height="50" rx="8" className={styles.box} />
          <text x={COL_X[i] + COL_W / 2} y="72" className={styles.boxLabel}>
            UI
          </text>
          <rect x={COL_X[i]} y="104" width={COL_W} height="50" rx="8" className={styles.box} />
          <text x={COL_X[i] + COL_W / 2} y="134" className={styles.boxLabel}>
            Business Logic
          </text>
        </g>
      ))}

      <line x1="20" y1="178" x2="620" y2="178" className={styles.divider} />
      <text x="20" y="200" className={styles.groupLabel}>
        AFTER — SHARED SDK ABSTRACTION LAYER
      </text>

      {PLATFORMS.map((platform, i) => (
        <g key={`after-${platform}`}>
          <rect x={COL_X[i]} y="216" width={COL_W} height="46" rx="8" className={styles.box} />
          <text x={COL_X[i] + COL_W / 2} y="244" className={styles.boxLabel}>
            {platform} UI
          </text>
          <line
            x1={COL_X[i] + COL_W / 2}
            y1="262"
            x2={CENTER_X}
            y2="300"
            className={styles.connector}
            markerEnd="url(#arrow-sdk)"
          />
        </g>
      ))}

      <rect x="20" y="300" width="600" height="56" rx="10" className={styles.boxAccent} />
      <text x={CENTER_X} y="333" className={styles.boxLabelAccent}>
        SDK Abstraction Layer
      </text>

      <line x1={CENTER_X} y1="356" x2={CENTER_X} y2="392" className={styles.connector} markerEnd="url(#arrow-sdk)" />

      <rect x="20" y="392" width="600" height="56" rx="10" className={styles.box} />
      <text x={CENTER_X} y="425" className={styles.boxLabel}>
        Business Logic &amp; Node.js Services
      </text>
    </svg>
  )
}
