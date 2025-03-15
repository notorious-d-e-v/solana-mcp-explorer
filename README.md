# solana-mcp-explorer
### Explore the MCP Servers in the Solana ecosystem!

**Before**  

![Before Image](./images/before.png)

**After**

![After Image](./images/after.png)


Simply add this MCP Server to your MCP Host, and you can explore all of the MCP Servers in the Solana ecosystem.


## Installation Instructions

Below are instructions for integrating this MCP Server with your MCP Host. For example, Claude Desktop.

### Claude Desktop
Add the following to your Claude Desktop configuration file

```json
{
  "mcpServers": {
    "solana-mcp-explorer": {
      "command": "npx",
      "args": [
        "-y",
        "solana-mcp-explorer@latest"
      ]
    }
  }
}
```

## Contributing

Have you created a MCP server for Solana?
We'd love to add it to the explorer!

To add your MCP Server to the Explorer, please edit the [servers.js](./servers.js) file with your server's information, and submit a PR.
