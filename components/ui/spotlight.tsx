export function Spotlight() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 opacity-[0.15] dark:opacity-[0.22]"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--brand) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent, var(--background) 92%)',
        }}
      />
    </div>
  )
}
