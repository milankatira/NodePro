const { cpBackend } = require("../../functions/axios");
const { spotify } = require("../spotify");
const { tiktok } = require("../tiktok");
const { solanaTodo } = require("../solana-todo");
const { portfolioApp } = require("../nextjs-portfolio");
const { venmo } = require("../venmo");
const { lotteryApp } = require("../lottery");
const { solBlog } = require("../solBlog");
const { uniswap } = require("../uniswap-infura");
const { turo } = require("../turo");
const { moonbirds } = require("../moonbirds");
const { solidityBlog } = require("../solidity-blog");
const { solAirbnb } = require("../solana-airbnb");
const { cashAppSolana } = require("../cashapp-solana");
const { nftDropSolana } = require("../nftdrop-solana");
const { instagramSolana } = require("../instagram-solana");
const { ebay } = require("../ebay");
const { solLottery } = require("../solana-lottery");
const { InfuraTiktok } = require("../infura-tiktok");
const { InfuraAirbnb } = require("../infura-airbnb");
const { InfuraInstagram } = require("../infura-instagram");
const { WhatsAppTw } = require("../whatsapp-tw");
const { NetflixTw } = require("../netflix-tw");
const { solPrediction } = require("../solana-prediction");
const { InfuraSushiSwap } = require("../infura-sushiswap");
const { InfuraPrediction } = require("../infura-prediction-solidity");
const { phantomTwitter } = require("../phantom-twitter");

async function saveAnalytics(name, email, selectedProject) {
  console.log("[1/2] Success");

  switch (selectedProject) {
    case "Solidity Prediction Dapp":
      InfuraPrediction();
      break;
    case "Solidity SushiSwap":
      InfuraSushiSwap();
      break;
    case "Solana Prediction App":
      solPrediction();
      break;
    case "Solana CashApp":
      cashAppSolana();
      break;
    case "Solana Instagram":
      instagramSolana();
      break;
    case "Solana NFT Drop":
      nftDropSolana();
      break;
    case "Solana Lottery":
      solLottery();
      break;
    case "Ebay":
      ebay();
      break;
    case "Solana Airbnb":
      solAirbnb();
      break;
    case "Solidity Blog":
      solidityBlog();
      break;
    case "Moonbirds":
      moonbirds();
      break;
    case "Uniswap":
      uniswap();
      break;
    case "Turo":
      turo();
      break;
    case "Solana Blog":
      solBlog();
      break;
    case "Venmo":
      venmo();
      break;
    case "Solidity Lottery":
      lotteryApp();
      break;
    case "Portfolio":
      portfolioApp();
      break;
    case "Solana Todo":
      solanaTodo();
      break;
    case "TikTok":
      tiktok();
      break;
    case "Spotify":
      spotify();
      break;
    case "Solidity TikTok":
      InfuraTiktok();
      break;
    case "Solidity Airbnb":
      InfuraAirbnb();
      break;
    case "Solidity Instagram":
      InfuraInstagram();
      break;
    case "WhatsApp (Thirdweb & Digital Ocean)":
      WhatsAppTw();
      break;
    case "Netflix":
      NetflixTw();
      break;
    case "Phantom Twitter":
      phantomTwitter();
      break;
    default:
      console.log("❗ 404 Error not found 📈");
      process.exit(1);
  }
}

module.exports = {
  saveAnalytics,
};
