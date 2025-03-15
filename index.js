#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import serversTextResponse from "./servers.js";

// Create server instance
const server = new McpServer({
  name: "Solana MCP Explorer",
  version: "1.0.0",
});

// Add a resource to list all Solana related MCP Servers
server.resource(
  "explore",
  "explore://solana",
  async (uri) => ({
    contents: [{
      uri: uri.href,
      text: serversTextResponse,
    }]
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
