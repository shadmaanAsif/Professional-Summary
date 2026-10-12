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
    'I treat AI-assisted engineering as a team-wide practice, not an individual habit — adopted deliberately and measured by what it changes in delivery.',
  capabilities: [
    {
      title: 'AI Pair-Programming & Coding Agents',
      detail: 'Drove team-wide adoption of Claude Code, Cursor, and GitHub Copilot.',
    },
    {
      title: 'Prompt Engineering & LLM API Integrations',
      detail: 'Prompt engineering and LLM API integrations.',
    },
    {
      title: 'Model Context Protocol (MCP) Tooling',
      detail: 'MCP-based tooling adopted team-wide alongside the AI coding tools.',
    },
    {
      title: 'AI-Assisted Code Review',
      detail: 'AI-assisted code review, adopted team-wide alongside MCP-based tooling as part of the AI-assisted delivery work.',
    },
    {
      title: 'AI-Powered UI Prototyping',
      detail: 'AI-powered UI prototyping, part of the team-wide AI adoption.',
    },
    {
      title: 'JavaScript & Node.js Automation',
      detail: 'Automation tooling I build independently in JavaScript and Node.js.',
    },
  ],
  adoptionStory:
    "I drove my team's shift from experimenting with AI-assisted development to shipping with it daily.",
  metric: { label: 'Feature delivery speed', value: '~25% faster with AI-assisted delivery' },
}
