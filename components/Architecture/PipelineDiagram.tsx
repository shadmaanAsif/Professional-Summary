import { canvas, box, boxAccent, boxLabel, boxLabelAccent, boxSubLabel, groupLabel, connector, arrowheadFill } from './diagram-styles'

const TARGETS = [
  { label: 'AWS', y: 20 },
  { label: 'Vercel', y: 105 },
  { label: 'Cloudflare', y: 190 },
]

export default function PipelineDiagram() {
  return (
    <svg
      className={canvas}
      viewBox="0 0 810 260"
      role="img"
      aria-label="Diagram showing the delivery pipeline flowing from monorepo and micro frontends, through Docker and Kubernetes containers, through CI/CD with GitHub Actions, fanning out to AWS, Vercel, and Cloudflare."
    >
      <defs>
        <marker id="arrow-pipeline" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowheadFill} />
        </marker>
      </defs>

      <text x="20" y="16" className={groupLabel}>
        MONOREPO → CONTAINERS → CI/CD → DEPLOYMENT TARGETS
      </text>

      <rect x="20" y="110" width="170" height="60" rx="9" className={box} />
      <text x="105" y="136" textAnchor="middle" className={boxLabel}>
        Monorepo (Lerna)
      </text>
      <text x="105" y="154" textAnchor="middle" className={boxSubLabel}>
        + Micro Frontends
      </text>

      <line x1="190" y1="140" x2="230" y2="140" className={connector} markerEnd="url(#arrow-pipeline)" />

      <rect x="230" y="110" width="170" height="60" rx="9" className={box} />
      <text x="315" y="136" textAnchor="middle" className={boxLabel}>
        Docker
      </text>
      <text x="315" y="154" textAnchor="middle" className={boxSubLabel}>
        + Kubernetes
      </text>

      <line x1="400" y1="140" x2="440" y2="140" className={connector} markerEnd="url(#arrow-pipeline)" />

      <rect x="440" y="110" width="140" height="60" rx="9" className={boxAccent} />
      <text x="510" y="136" textAnchor="middle" className={boxLabelAccent}>
        CI/CD
      </text>
      <text x="510" y="154" textAnchor="middle" className={boxSubLabel}>
        GitHub Actions
      </text>

      {TARGETS.map((target) => (
        <g key={target.label}>
          <line
            x1="580"
            y1="140"
            x2="630"
            y2={target.y + 25}
            className={connector}
            markerEnd="url(#arrow-pipeline)"
          />
          <rect x="630" y={target.y} width="160" height="50" rx="9" className={box} />
          <text x="710" y={target.y + 30} textAnchor="middle" className={boxLabel}>
            {target.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
