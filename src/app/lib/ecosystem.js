const DSS = "DSS";
const OPERATOR = "operator";
const CHAIN = "chain";
const PROTOCOL = "protocol";

// all logo imports
import kuda from "../../images/ecosystem/kuda.svg";
import wormhole from "../../images/ecosystem/wormhole.svg";
import allnodes from "../../images/ecosystem/allnodes.svg";
import animoca from "../../images/ecosystem/animoca.svg";
import ankr from "../../images/ecosystem/ankr.svg";
import arbfloat from "../../images/ecosystem/arb-float.svg";
import etherfi from "../../images/ecosystem/etherfi.svg";
import bedrock from "../../images/ecosystem/bedrock.svg";
import bitgo from "../../images/ecosystem/bitgo.svg";
import blast from "../../images/ecosystem/blast.svg";
import bnb from "../../images/ecosystem/bnb.svg";
import caldera from "../../images/ecosystem/caldera.svg";
import circle from "../../images/ecosystem/circle.svg";
import dsrv from "../../images/ecosystem/dsrv.svg";
import stader from "../../images/ecosystem/stader.svg";
import ethena from "../../images/ecosystem/ethena.svg";
import everstake from "../../images/ecosystem/everstake.svg";
import finoa from "../../images/ecosystem/finoa.svg";
import frax from "../../images/ecosystem/frax.svg";
import hashkey from "../../images/ecosystem/hashkey.svg";
import hyberbolic from "../../images/ecosystem/hyberbolic.svg";
import hyperlane from "../../images/ecosystem/hyperlane.svg";
import hypernative from "../../images/ecosystem/hypernative.svg";
import infrasingularity from "../../images/ecosystem/infrasingularity.svg";
import infstones from "../../images/ecosystem/infstones.svg";
import k2 from "../../images/ecosystem/k2.svg";
import kelp from "../../images/ecosystem/kelp.svg";
import kiln from "../../images/ecosystem/kiln.svg";
import lido from "../../images/ecosystem/lido.svg";
import lista from "../../images/ecosystem/lista.svg";
import luganodes from "../../images/ecosystem/luganodes.svg";
import magpie from "../../images/ecosystem/magpie.svg";
import mantle from "../../images/ecosystem/mantle.svg";
import meria from "../../images/ecosystem/meria.svg";
import nethermind from "../../images/ecosystem/nethermind.svg";
import okx from "../../images/ecosystem/okx.svg";
import originether from "../../images/ecosystem/origin-ether.svg";
import pendle from "../../images/ecosystem/pendle.svg";
import piertwo from "../../images/ecosystem/piertwo.svg";
import proofgroup from "../../images/ecosystem/proof-group.svg";
import puffer from "../../images/ecosystem/puffer.svg";
import redacted from "../../images/ecosystem/redacted.svg";
import renzo from "../../images/ecosystem/renzo.svg";
import rocketpool from "../../images/ecosystem/rocket-pool.svg";
import rockx from "../../images/ecosystem/rockx.svg";
import slashproof from "../../images/ecosystem/slashproof.svg";
import solv from "../../images/ecosystem/solv.svg";
import spaceandtime from "../../images/ecosystem/space-and-time.svg";
import coinbase from "../../images/ecosystem/coinbase.svg";
import binance from "../../images/ecosystem/binance.svg";
import ethereum from "../../images/ecosystem/ethereum.svg";
import spacetimefloat from "../../images/ecosystem/spacetime-float.svg";
import spark from "../../images/ecosystem/spark.svg";
import subsea from "../../images/ecosystem/subsea.svg";
import swell from "../../images/ecosystem/swell.svg";
import tether from "../../images/ecosystem/tether.svg";
import validao from "../../images/ecosystem/validao.svg";
import validationcloud from "../../images/ecosystem/validation-cloud.svg";

export const ecosystem_tabs = [
  {
    name: "all",
    value: "",
  },
  {
    name: "DSS",
    value: "dss",
  },
  {
    name: "Operator",
    value: "operator",
  },
  {
    name: "Chain",
    value: "chain",
  },
  {
    name: "Protocol",
    value: "protocol",
  },
];

export const crypto_ecosystems = [
  {
    name: "KUDA",
    imgSrc: kuda,
    type: DSS,
    desciption:
      "Karak Universal Data Availability, KUDA, is the first DA marketplace designed to seamlessly connect rollups with any DA layer.",
    link: "",
  },
  {
    name: "Wormhole",
    imgSrc: wormhole,
    type: DSS,
    desciption:
      "Wormhole is the leading interoperability platform that facilitates the secure transfer of arbitrary messages across chains.",
    link: "",
  },
  {
    name: "Space and Time",
    imgSrc: spaceandtime,
    type: DSS,
    desciption:
      "Space and Time is the first decentralized data warehouse that delivers sub-second ZK proofs against onchain and offchain data.",
    link: "",
  },
  {
    name: "Hyperbolic",
    imgSrc: hyberbolic,
    type: DSS,
    desciption:
      "Hyperbolic unites global compute to provide accessible, affordable, and scalable GPU resources and AI services.",
    link: "",
  },
  {
    name: "Hypernative",
    imgSrc: hypernative,
    type: DSS,
    desciption:
      "Hypernative stops zero-day Web3 cyber attacks and protects digital assets, protocols, and Web3 applications from significant losses.",
    link: "",
  },
  {
    name: "Hyperlane",
    imgSrc: hyperlane,
    type: DSS,
    desciption:
      "Hyperlane is the first interoperability layer that enables you to permissionlessly connect any blockchain, out-of-the-box.",
    link: "",
  },
  {
    name: "Subsea",
    imgSrc: subsea,
    type: DSS,
    desciption:
      "Subsea is a risk management marketplace with an automated invariant detection mechanism to secure users against risks, hacks, and attacks.",
    link: "",
  },
  {
    name: "Slash proof",
    imgSrc: slashproof,
    type: DSS,
    desciption:
      "SlashProof is the only place to protect restaked assets, secured by zero-knowledge proofs.",
    link: "",
  },
  {
    name: "Pendle",
    imgSrc: pendle,
    type: PROTOCOL,
    desciption:
      "Pendle Finance is a decentralized finance (DeFi) platform that allows users to trade tokenized future yield and manage yield-bearing assets.",
    link: "",
  },
  {
    name: "Coinbase Staking",
    imgSrc: coinbase,
    type: PROTOCOL,
    desciption:
      "Coinbase cbETH is a Liquid Staking Token created and maintained by Coinbase, which represents Ethereum staked through Coinbase.",
    link: "",
  },
  {
    name: "Binance Staking",
    imgSrc: binance,
    type: PROTOCOL,
    desciption:
      "Binance wBETH is a Liquid Staking Token created and maintained by Binance, which represents Ethereum staked through Binance.",
    link: "",
  },
  {
    name: "Etherum",
    imgSrc: ethereum,
    type: CHAIN,
    desciption:
      "Ethereum is a decentralized, open-source blockchain that enables the creation and execution of smart contracts and decentralized applications.",
    link: "",
  },
  {
    name: "Arbitrum",
    imgSrc: arbfloat,
    type: CHAIN,
    desciption:
      "Arbitrum is a Layer 2 scaling solution for the Ethereum blockchain that powers fast smart contract transactions while reducing transaction costs.",
    link: "",
  },
  {
    name: "Circle",
    imgSrc: circle,
    type: PROTOCOL,
    desciption:
      "USDC is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every UNIT is backed by a dollar or equivalent asset held in reserve.",
    link: "",
  },
  {
    name: "Tether",
    imgSrc: tether,
    type: PROTOCOL,
    desciption:
      "USDT is a cryptocurrency stablecoin pegged to the US dollar, designed to combine blockchain technology with the stable value of the dollar.",
    link: "",
  },
  {
    name: "BNB",
    imgSrc: bnb,
    type: CHAIN,
    desciption:
      "BNB is a blockchain developed by Binance that provides high performance and low cost transactions for various DeFi applications.",
    link: "",
  },
  {
    name: "Mantle",
    imgSrc: mantle,
    type: CHAIN,
    desciption:
      "Mantle is an L2 that offers high performance and low fees, designed to enhance the UX and capabilities of decentralized applications.",
    link: "",
  },
  {
    name: "Blast",
    imgSrc: blast,
    type: CHAIN,
    desciption:
      "Blast is an L2 that offers native yield for ETH and stablecoins.",
    link: "",
  },
  {
    name: "Lido",
    imgSrc: lido,
    type: PROTOCOL,
    desciption:
      "Lido stETH is a Liquid Staking Token that represents staked ether in Lido, combining the value of the initial deposit + staking rewards.",
    link: "",
  },
  {
    name: "K2",
    imgSrc: k2,
    type: CHAIN,
    desciption:
      "K2 is a modular, restaked Layer 2 blockchain with native risk management and AI infrastructure built for the next billion users.",
    link: "",
  },
  {
    name: "Caldera",
    imgSrc: caldera,
    type: PROTOCOL,
    desciption:
      "Caldera is a rollup deployment platform to launch high-performance, customizable, application-specific rollups with Arbitrum and Optimism frameworks.",
    link: "",
  },
  {
    name: "Etherfi",
    imgSrc: etherfi,
    type: PROTOCOL,
    desciption:
      "EtherFi is a decentralized staking protocol that allows users to stake their ETH and earn rewards without needing to lock up their funds.",
    link: "",
  },
  {
    name: "Spak",
    imgSrc: spark,
    type: PROTOCOL,
    desciption:
      "Spark is a DeFi protocol within the MakerDAO ecosystem, allowing users to participate in various DeFi activities using the Dai Savings Rate.",
    link: "",
  },
  {
    name: "BitGo Staking",
    imgSrc: bitgo,
    type: PROTOCOL,
    desciption:
      "Wrapped Bitcoin is an ERC-20 cryptocurrency token that runs on the Ethereum blockchain and is intended to be backed 1:1 by Bitcoin.",
    link: "",
  },
  {
    name: "Ethena",
    imgSrc: ethena,
    type: PROTOCOL,
    desciption:
      "Ethena is a DeFi protocol with a synthetic dollar stablecoin called USDe, providing yield through a combination of staking Ether and shorting Ether futures.",
    link: "",
  },
  {
    name: "Rocket Pool",
    imgSrc: rocketpool,
    type: PROTOCOL,
    desciption:
      "Rocket Pool rETH is a Liquid Staking Token which represents a user's proportional claim to ETH in Rocket Pool.",
    link: "",
  },
  {
    name: "Frax",
    imgSrc: frax,
    type: PROTOCOL,
    desciption:
      "Frax aims to create a scalable, algorithmic, and partially collateralized stablecoin called FRAX, which maintains its peg to the US dollar.",
    link: "",
  },
  {
    name: "Redacted Cartel",
    imgSrc: redacted,
    type: PROTOCOL,
    desciption:
      "DAO focused on building a decentralized liquidity layer for the DeFi ecosystem, using a combination of bonding, staking, and decentralized governance.",
    link: "",
  },
  {
    name: "Renzo",
    imgSrc: renzo,
    type: PROTOCOL,
    desciption:
      "Renzo allows users to pool their staked tokens to earn rewards and serves as an interface to restake their ETH or Liquid Staking Tokens.",
    link: "",
  },
  {
    name: "Swell",
    imgSrc: swell,
    type: PROTOCOL,
    desciption:
      "Swell is a non-custodial staking protocol aiming to deliver the world’s best liquid staking and restaking experience.",
    link: "",
  },
  {
    name: "Kelp",
    imgSrc: kelp,
    type: PROTOCOL,
    desciption:
      "Kelp DAO is a liquid restaking protocol designed to enhance liquidity for restaked assets by offering tokens that represent otherwise illiquid assets.",
    link: "",
  },
  {
    name: "Puffer",
    imgSrc: puffer,
    type: PROTOCOL,
    desciption:
      "Puffer Finance is a native liquid restaking protocol that enhances the performance and diversity of Ethereum proof-of-stake validators.",
    link: "",
  },
  {
    name: "Magpie",
    imgSrc: magpie,
    type: PROTOCOL,
    desciption:
      "Magpie is a multichain DeFi protocol that facilitates cross-chain swaps and boosts yield for liquidity providers and governance token holders.",
    link: "",
  },
  {
    name: "Bedrock",
    imgSrc: bedrock,
    type: PROTOCOL,
    desciption:
      "Bedrock is a multiasset liquid restaking protocol backed by non-custodial solution designed in partnership with RockX.",
    link: "",
  },
  {
    name: "Stader",
    imgSrc: stader,
    type: PROTOCOL,
    desciption:
      "Stader is a liquid staking platform that enables users to stake their assets to earn rewards while retaining the liquidity of their staked assets.",
    link: "",
  },
  {
    name: "Lista",
    imgSrc: lista,
    type: PROTOCOL,
    desciption:
      "Lista DAO functions as a open-source liquidity protocol for earning yields on collateralized crypto assets.",
    link: "",
  },
  {
    name: "Solv",
    imgSrc: solv,
    type: PROTOCOL,
    desciption:
      "Solv is revolutionizing yield aggregation and liquidity management by tokenizing and consolidating high-quality yields from diverse sources.",
    link: "",
  },
  {
    name: "Origin",
    imgSrc: originether,
    type: PROTOCOL,
    desciption:
      "Origin Ether is a Liquid Staking Token that earns yield from all forms of staking and offers a tighter peg to ETH.",
    link: "",
  },
  {
    name: "Nethermind",
    imgSrc: nethermind,
    type: OPERATOR,
    desciption:
      "Engineering and research solutions, empowering developers & enterprises to build upon the decentralized web.",
    link: "",
  },
  {
    name: "Allnodes",
    imgSrc: allnodes,
    type: OPERATOR,
    desciption:
      "Allnodes is a non-custodial staking and node hosting platform and advanced infrastructure provider, making it easy and safe for all.",
    link: "",
  },
  {
    name: "Everstake",
    imgSrc: everstake,
    type: OPERATOR,
    desciption:
      "Everstake is a major blockchain company focused on providing essential services to blockchains, investment, staking, and guardianship.",
    link: "",
  },
  {
    name: "Heshkey Cloud",
    imgSrc: everstake,
    type: OPERATOR,
    desciption:
      "A world-leading blockchain staking service provider by Haskey Group.",
    link: "",
  },
  {
    name: "OKX",
    imgSrc: okx,
    type: OPERATOR,
    desciption: "The only app you’ll need for 'all things crypto'.",
    link: "",
  },
  {
    name: "Ankr",
    imgSrc: ankr,
    type: OPERATOR,
    desciption:
      "Build web3 apps with a full suite of developer tools and power them with fast, global, decentralized connections to dozens of chains.",
    link: "",
  },
  {
    name: "DSRV",
    imgSrc: dsrv,
    type: OPERATOR,
    desciption: "Everything distributed, served complete.",
    link: "",
  },
  {
    name: "Proof Group",
    imgSrc: proofgroup,
    type: OPERATOR,
    desciption:
      "We are a team of former crypto founders and venture investors, backing the next generation of founders building disruptive financial technology.",
    link: "",
  },
  {
    name: "InfStones",
    imgSrc: infstones,
    type: OPERATOR,
    desciption:
      "The Ultimate Web3 Infrastructure Platform supporting over 80+ blockchain protocols.",
    link: "",
  },
  {
    name: "InfraSingulairty",
    imgSrc: infrasingularity,
    type: OPERATOR,
    desciption:
      "InfraSingularity aims to radically transform the Web3 ecosystem as a pioneering Web3 Investor, and builder.",
    link: "",
  },
  {
    name: "RockX",
    imgSrc: rockx,
    type: OPERATOR,
    desciption:
      "Stake and build across multiple chains seamlessly with enterprise-grade blockchain infrastructure & staking solutions.",
    link: "",
  },
  {
    name: "Luganodes",
    imgSrc: luganodes,
    type: OPERATOR,
    desciption:
      "World's leading blockchain infrastructure provider from Lugano Plan B, an initiative by Lugano & Tether.",
    link: "",
  },
  {
    name: "Finao",
    imgSrc: finoa,
    type: OPERATOR,
    desciption: "Empowering institutions to safely engage with crypto.",
    link: "",
  },
  {
    name: "Kiln",
    imgSrc: kiln,
    type: OPERATOR,
    desciption: "Kiln makes enterprise-grade staking easy.",
    link: "",
  },
  {
    name: "A41",
    imgSrc: kiln,
    type: OPERATOR,
    desciption: "Bring cryptoeconomy to real life.",
    link: "",
  },
  {
    name: "Meria",
    imgSrc: meria,
    type: OPERATOR,
    desciption: "Build your crypto wealth.",
    link: "",
  },
];
