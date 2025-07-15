# agentify
#1 Fastest Simplest Typescript Agent Framework optimized for serverless workload

## Installation

```bash
npm install @agentify/core
```

## Quick Start

```typescript
import { createAgent, Agent, AgentConfig, AgentContext, AgentResponse } from '@agentify/core';

// Create a simple agent using the factory function
const simpleAgent = createAgent(
  { name: 'HelloAgent', version: '1.0.0' },
  async (context: AgentContext): Promise<AgentResponse> => {
    return {
      success: true,
      data: `Hello, ${context.name || 'World'}!`
    };
  }
);

// Or extend the Agent class
class CustomAgent extends Agent {
  async execute(context: AgentContext): Promise<AgentResponse> {
    try {
      // Your agent logic here
      const result = await someAsyncOperation(context);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

// Usage
const agent = new CustomAgent({ name: 'MyAgent' });
const response = await agent.execute({ input: 'some data' });
```

## Features

- ⚡ **Fast**: Optimized for serverless workloads
- 🔧 **Simple**: Minimal API surface
- 📝 **TypeScript**: Full type safety
- 🚀 **Serverless**: Perfect for AWS Lambda, Vercel, etc.

## API

### Interfaces

- `AgentConfig`: Configuration for agents
- `AgentContext`: Input context for agent execution  
- `AgentResponse`: Standardized response format

### Classes

- `Agent`: Abstract base class for creating agents
- `createAgent()`: Factory function for simple agents
