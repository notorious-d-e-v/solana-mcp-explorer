// list your mcp servers here
// Example:
//

const mcpServers = [
    {
        "name": "Solana Agent Kit MCP Server",
        "description": "A Model Context Protocol (MCP) server that provides onchain tools for Claude AI. This allows Claude to interact with the Solana blockchain, execute transactions, query account information, and manage Solana wallets.",
        "homepage": "https://github.com/sendaifun/solana-mcp"
    },
    {
        "name": "Solana MCP Explorer",
        "description": "Discover all the MCP servers on Solana!",
        "homepage": "https://github.com/notorious-d-e-v/solana-mcp-explorer",
    },
    {
        "name": "Solana Model Context Protocol (MCP) Demo",
        "description": "This demo showcases a simple MCP server implementation that provides basic RPC methods for Solana (getBalance, getAccountInfo, getTransaction), and some helpful prompts for Solana development.",
        "homepage": "https://github.com/solana-foundation/solana-dev-mcp"
    }
]


const sortedByName = mcpServers.sort((a, b) => a.name.localeCompare(b.name))


let serversTextResponse = "Check out these MCP servers on Solana!\n"
sortedByName.forEach((server) => {
    serversTextResponse += `\n${server.name}\n${server.description}\n${server.homepage}\n\n`
})


export default serversTextResponse
