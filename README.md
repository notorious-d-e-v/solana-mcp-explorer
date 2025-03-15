# 🛰️ Solana MCP Explorer  
### Explore the MCP Servers in the Solana ecosystem!  

---

## 🚀 Before & After  

**Before:**  
![Before Image](./images/before.png)  

**After:**  
![After Image](./images/after.png)  

---

## 🔗 What is Solana MCP Explorer?  
Solana MCP Explorer allows you to discover and explore all MCP Servers within the Solana ecosystem. Simply add this MCP Server to your MCP Host, and start navigating the network effortlessly!  

---

## 🛠️ Installation Instructions  

To integrate this MCP Server with your MCP Host, follow the steps below.  

### 📌 Example: Claude Desktop  
Add the following configuration to your **Claude Desktop** setup:  

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

## 🤝 Contributing

💡 **Have you built an MCP Server for Solana?** We'd love to include it in the explorer!

### 📜 How to Add Your MCP Server

1. **Edit** the [`servers.js`](./servers.js) file with your server’s details.
2. **Submit a Pull Request (PR)** with your changes.

🚀 Your contributions help make Solana MCP Explorer better for everyone!
