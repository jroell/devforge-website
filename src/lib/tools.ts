export interface ToolInfo {
  name: string
  description: string
  category: string
}

export const tools: ToolInfo[] = [
  // Formatters
  { name: 'JSON Formatter', description: 'Format, minify, and validate JSON with syntax highlighting', category: 'Formatters' },
  { name: 'SQL Formatter', description: 'Format and beautify SQL queries', category: 'Formatters' },
  { name: 'HTML Formatter', description: 'Format and prettify HTML markup', category: 'Formatters' },
  { name: 'CSS/SCSS Formatter', description: 'Format and minify CSS stylesheets', category: 'Formatters' },
  { name: 'XML Formatter', description: 'Format and validate XML documents', category: 'Formatters' },
  { name: 'YAML Formatter', description: 'Format and validate YAML files', category: 'Formatters' },
  { name: 'Markdown Preview', description: 'Live preview Markdown with GFM support', category: 'Formatters' },
  { name: 'Prettier Runner', description: 'Format any code with Prettier', category: 'Formatters' },
  // Encoders
  { name: 'Base64 Encoder', description: 'Encode and decode Base64 strings', category: 'Encoders' },
  { name: 'URL Encoder', description: 'Encode and decode URL components', category: 'Encoders' },
  { name: 'HTML Entity Encoder', description: 'Encode and decode HTML entities', category: 'Encoders' },
  { name: 'JWT Decoder', description: 'Decode and inspect JSON Web Tokens', category: 'Encoders' },
  // Converters
  { name: 'Color Converter', description: 'Convert between HEX, RGB, HSL color formats', category: 'Converters' },
  { name: 'Unix Timestamp', description: 'Convert between Unix timestamps and dates', category: 'Converters' },
  { name: 'Number Base', description: 'Convert between binary, octal, decimal, hex', category: 'Converters' },
  { name: 'JSON ↔ YAML', description: 'Convert between JSON and YAML formats', category: 'Converters' },
  { name: 'JSON ↔ CSV', description: 'Convert between JSON and CSV data', category: 'Converters' },
  // Generators
  { name: 'Hash Generator', description: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes', category: 'Generators' },
  { name: 'UUID Generator', description: 'Generate v4 UUIDs in bulk', category: 'Generators' },
  { name: 'Password Generator', description: 'Generate secure random passwords', category: 'Generators' },
  { name: 'Lorem Ipsum', description: 'Generate placeholder text', category: 'Generators' },
  // Inspectors
  { name: 'Regex Tester', description: 'Test regular expressions with live matching', category: 'Inspectors' },
  { name: 'Cron Parser', description: 'Parse and explain cron expressions', category: 'Inspectors' },
  { name: 'Text Diff', description: 'Compare text with side-by-side diff view', category: 'Inspectors' },
  { name: 'Text Inspector', description: 'Analyze text: word count, encoding, stats', category: 'Inspectors' },
  { name: 'Mermaid Editor', description: 'Create and preview Mermaid diagrams', category: 'Inspectors' },
  // AI Tools
  { name: 'AI Code Generator', description: 'Generate code with AI assistance', category: 'AI Tools' },
  { name: 'AI Chat', description: 'Chat with AI about development questions', category: 'AI Tools' },
  { name: 'AI Explainer', description: 'Explain code with AI-powered analysis', category: 'AI Tools' },
  { name: 'AI Tool Builder', description: 'Create custom tools with AI assistance', category: 'AI Tools' },
]

export const categories = [...new Set(tools.map(t => t.category))]
