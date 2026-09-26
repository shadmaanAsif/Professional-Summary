import styles from './Architecture.module.css'

const TARGETS = [
  { label: 'AWS', y: 20 },
  { label: 'Vercel', y: 105 },
  { label: 'Cloudflare', y: 190 },
]

export default function PipelineDiagram() {
  return (
    <svg
      className={styles.canvas}
      viewBox="0 0 810 260"
      role="img"
      aria-label="Diagram showing the delivery pipeline flowing from monorepo and micro frontends, through Docker and Kubernetes containers, through CI/CD, fanning out to AWS, Vercel, and Cloudflare."
    >
      <defs>
        <marker id="arrow-pipeline" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={styles.arrowheadFill} />
        </marker>
      </defs>

      <text x="20" y="16" className={styles.groupLabel}>
        MONOREPO → CONTAINERS → CI/CD → MULTI-CLOUD DELIVERY
      </text>

      <rect x="20" y="110" width="170" height="60" rx="9" className={styles.box} />
      <text x="105" y="136" className={styles.boxLabel}>
        Monorepo (Lerna)
      </text>
      <text x="105" y="154" className={styles.boxSubLabel}>
        + Micro Frontends
      </text>

      <line x1="190" y1="140" x2="230" y2="140" className={styles.connector} markerEnd="url(#arrow-pipeline)" />

      <rect x="230" y="110" width="170" height="60" rx="9" className={styles.box} />
      <text x="315" y="136" className={styles.boxLabel}>
        Docker
      </text>
      <text x="315" y="154" className={styles.boxSubLabel}>
        + Kubernetes
      </text>

      <line x1="400" y1="140" x2="440" y2="140" className={styles.connector} markerEnd="url(#arrow-pipeline)" />

      <rect x="440" y="110" width="140" height="60" rx="9" className={styles.boxAccent} />
      <text x="510" y="145" className={styles.boxLabelAccent}>
        CI/CD
      </text>

      {TARGETS.map((target) => (
        <g key={target.label}>
          <line
            x1="580"
            y1="140"
            x2="630"
            y2={target.y + 25}
            className={styles.connector}
            markerEnd="url(#arrow-pipeline)"
          />
          <rect x="630" y={target.y} width="160" height="50" rx="9" className={styles.box} />
          <text x="710" y={target.y + 30} className={styles.boxLabel}>
            {target.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
