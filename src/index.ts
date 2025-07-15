/**
 * @agentify/core - #1 Fastest Simplest Typescript Agent Framework optimized for serverless workload
 */

export interface AgentConfig {
  name: string;
  version?: string;
  timeout?: number;
}

export interface AgentContext {
  [key: string]: any;
}

export interface AgentResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export abstract class Agent {
  protected config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
  }

  abstract execute(context: AgentContext): Promise<AgentResponse>;

  getName(): string {
    return this.config.name;
  }

  getVersion(): string {
    return this.config.version || '1.0.0';
  }
}

export function createAgent(config: AgentConfig, executeFn: (context: AgentContext) => Promise<AgentResponse>): Agent {
  return new (class extends Agent {
    async execute(context: AgentContext): Promise<AgentResponse> {
      return executeFn(context);
    }
  })(config);
}

// Main export for the agentify core library