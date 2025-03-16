// list your mcp servers here

const mcpServers = [
    {
        "name": "DaoCLI MCP Server",
        "description": "A tool to create & manage DAOs effortlessly using Anthropic AI Claude MCP. 🤖⚡Built for decentralized governance on Solana!",
        "homepage": "https://github.com/DaoCLI/daoCLI-init"
    },
    {
        "name": "DeBridge MCP Server",
        "description": "Cross-chain token bridging between Solana and Ethereum, using deBridge!",
        "homepage": "https://github.com/bussyjd/debridge-mcp"
    },
    {
        "name": "MCP Meme Deployer",
        "description": "Deploy Instantly Tradable Tokens on Solana with Claude For Free! Just send Claude a name and symbol and it will deploy a token for you and seed a single sided LP pool on Orca for free!",
        "homepage": "https://github.com/kirabuilds/mcp-meme-deployer"
    },
    {
        "name": "Solana Agent Kit MCP Server",
        "description": "A Model Context Protocol (MCP) server that provides onchain tools for Claude AI. This allows Claude to interact with the Solana blockchain, execute transactions, query account information, and manage Solana wallets.",
        "homepage": "https://github.com/sendaifun/solana-mcp"
    },
    {
        "name": "Solana Developer Toolkit",
        "description": "Provides developer-friendly tools for creating and testing smart contracts on Solana, through Claude Desktop, Cursor, or your favorite MCP host!",
        "homepage": "https://github.com/YCrydev/solana-dev-mcp-extension"
    },
    {
        "name": "Solana MCP Explorer",
        "description": "Discover all the MCP servers on Solana!",
        "homepage": "https://github.com/notorious-d-e-v/solana-mcp-explorer"
    },
    {
        "name": "Solana Model Context Protocol (MCP) Demo",
        "description": "This demo showcases a simple MCP server implementation that provides basic RPC methods for Solana (getBalance, getAccountInfo, getTransaction), and some helpful prompts for Solana development.",
        "homepage": "https://github.com/solana-foundation/solana-dev-mcp"
    },
    {
        "name": "SolMCP",
        "description": "An MCP server with a set of 7 tools to make and help every Solana degen, validator and node operator!",
        "homepage": "https://github.com/N-45div/SolMCP---SendAI-MCP-competition"
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
        "name": "Orbis",
        "description": "Orbis MCP server is a math driven analytics server that gathers data from multiple sources, applies advanced mathematical models, and transforms it into actionable insights!",
        "homepage": "https://github.com/solronin/orbis"
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
