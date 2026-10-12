import { canvas, box, boxAccent, boxLabel, boxLabelAccent, boxSubLabel, groupLabel, connector, arrowheadFill } from './diagram-styles'

export default function ApiLayerDiagram() {
  return (
    <svg
      className={canvas}
      viewBox="0 0 640 294"
      role="img"
      aria-label="Diagram showing client applications calling a backend-for-frontend layer built on Next.js API routes and Express.js services, which aggregates downstream REST and GraphQL endpoints into optimized payloads for client consumption."
    >
      <defs>
        <marker id="arrow-api" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowheadFill} />
        </marker>
      </defs>

      <text x="20" y="16" className={groupLabel}>
        CLIENTS → BACKEND-FOR-FRONTEND → DOWNSTREAM ENDPOINTS
      </text>

      <rect x="160" y="34" width="320" height="50" rx="9" className={box} />
      <text x="320" y="64" textAnchor="middle" className={boxLabel}>
        Client Applications
      </text>

      <line x1="320" y1="84" x2="320" y2="120" className={connector} markerEnd="url(#arrow-api)" />

      <rect x="110" y="120" width="420" height="64" rx="10" className={boxAccent} />
      <text x="320" y="148" textAnchor="middle" className={boxLabelAccent}>
        Next.js API Routes + Express.js Services
      </text>
      <text x="320" y="168" textAnchor="middle" className={boxSubLabel}>
        Backend-for-frontend — aggregates &amp; optimizes payloads
      </text>

      <line x1="260" y1="184" x2="180" y2="224" className={connector} markerEnd="url(#arrow-api)" />
      <line x1="380" y1="184" x2="460" y2="224" className={connector} markerEnd="url(#arrow-api)" />

      <rect x="80" y="224" width="200" height="50" rx="9" className={box} />
      <text x="180" y="254" textAnchor="middle" className={boxLabel}>
        REST Endpoints
      </text>

      <rect x="360" y="224" width="200" height="50" rx="9" className={box} />
      <text x="460" y="254" textAnchor="middle" className={boxLabel}>
        GraphQL Endpoints
      </text>
    </svg>
  )
}
