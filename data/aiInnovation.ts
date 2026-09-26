export interface AICapability {
  title: string
  detail: string
}

export interface AIInnovationContent {
  heading: string
  intro: string
  capabilities: AICapability[]
  adoptionStory: string
  metric: { label: string; value: string }
}

export const aiInnovation: AIInnovationContent = {
  heading: 'AI & Innovation',
  intro:
    'I treat AI-assisted engineering as a deliberate team practice, not an individual habit — the same way I treat any other platform decision: evaluate it, standardize it, and measure what it changes.',
  capabilities: [
    {
      title: 'AI Pair-Programming & Coding Agents',
      detail: 'Daily use of Claude Code, Cursor, and GitHub Copilot across the team, not just individual experimentation.',
    },
    {
      title: 'Prompt Engineering & LLM API Integrations',
      detail: 'Hands-on prompt engineering and direct LLM API integration work, beyond just consuming chat-based tools.',
    },
    {
      title: 'Model Context Protocol (MCP) Tooling',
      detail: 'MCP-based tooling wired into the team’s existing development workflow rather than bolted on separately.',
    },
    {
      title: 'AI-Assisted Code Review & Automation',
      detail: 'AI-assisted review and automation folded into the standard PR process, alongside the code-review standards that already cut turnaround ~50%.',
    },
  ],
  adoptionStory:
    "I drove my team's shift from experimenting with AI-assisted development to shipping with it daily. That meant setting shared conventions for how the tools get used, not just giving engineers access to them — the difference between a novelty and a practice that compounds.",
  metric: { label: 'Feature delivery speed', value: '~+25%, from AI-assisted delivery' },
}
