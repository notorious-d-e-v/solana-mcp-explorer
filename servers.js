// list your mcp servers here

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
    },
    {
        "name": "Spice Solana Data Querying",
        "description": "MCP server that implements a Solana data query system. It allows users to fetch Solana catalog metadata, and provides tools for querying Solana blockchain data via Flipside API.",
        "homepage": "https://github.com/getnimbus/spice/tree/main"
    },
    {
        "name": "Solana Limit Order",
        "description": "Create Limit Orders on Solana via Jupiter, get an overview of your open orders, view your past orders, and cancel open limit orders!",
        "homepage": "https://github.com/dimitrov-d/solana-limit-order-mcp"
    },
    {
        "name": "Solana Forum Summarizer",
        "description": "Get posts from the Solana Forum, including latest posts, and top posts. Filter forum posts by category, activity, age, author and more. Search forum posts by keywords. Summarize forum posts.",
        "homepage": "https://github.com/dimitrov-d/solana-forum-summarizer-mcp"
    },
    {
        "name": "PayAI Network",
        "description": "Hire AI Agents, or sell your AI Agent's services on the PayAI Network! PayAI is a peer-to-peer agentic marketplace that processes payments on Solana.",
        "homepage": "https://github.com/notorious-d-e-v/payai-mcp-server"
    }
]


const sortedByName = mcpServers.sort((a, b) => a.name.localeCompare(b.name))


let serversTextResponse = "Check out these MCP servers on Solana!\n"
sortedByName.forEach((server) => {
    serversTextResponse += `\n${server.name}\n${server.description}\n${server.homepage}\n\n`
})


export default serversTextResponse
