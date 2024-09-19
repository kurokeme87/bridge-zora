import { ethers } from "ethers";
// import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { computePoolAddress, FeeAmount } from "@uniswap/v3-sdk";

const QUOTER_CONTRACT_ADDRESS = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";

const QuoterABI = [
  {
    inputs: [
      { internalType: "address", name: "tokenIn", type: "address" },
      { internalType: "address", name: "tokenOut", type: "address" },
      { internalType: "uint24", name: "fee", type: "uint24" },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint160", name: "sqrtPriceLimitX96", type: "uint160" },
    ],
    name: "quoteExactInputSingle",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

const READABLE_FORM_LEN = 4;

export function fromReadableAmount(amount, decimals) {
  return ethers.parseUnits(amount.toString(), decimals);
}

export function toReadableAmount(rawAmount, decimals) {
  return ethers.formatUnits(rawAmount, decimals).slice(0, READABLE_FORM_LEN);
}

export const CurrentConfig = {
  rpc: {
    local: "http://localhost:8545",
    mainnet: "https://mainnet.infura.io/v3/d2f1318a43b04053af0d9004bd190d73",
  },
  // tokens: {
  //   in: USDC_TOKEN,
  //   amountIn: 1000,
  //   out: WETH_TOKEN,
  //   poolFee: FeeAmount.MEDIUM,
  // },
};

export function getProvider() {
  return new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet);
}

export async function quote(tokens) {
  const quoterContract = new ethers.Contract(
    QUOTER_CONTRACT_ADDRESS,
    QuoterABI,
    getProvider()
  );
  const poolConstants = await getPoolConstants(tokens);

  const quotedAmountOut = await quoterContract.quoteExactInputSingle(
    poolConstants.token0,
    poolConstants.token1,
    poolConstants.fee,
    fromReadableAmount(tokens.amountIn, tokens.in.decimals).toString(),
    0
  );
  console.log("quotedAmountOut", quotedAmountOut);

  return toReadableAmount(quotedAmountOut, tokens.out.decimals);
}

async function getPoolConstants(tokens) {
  console.log(tokens.in);
  console.log(tokens.out);
  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: tokens.in,
    tokenB: tokens.out,
    fee: FeeAmount.MEDIUM,
  });
  console.log(currentPoolAddress);

  const exist = await checkIfPoolExists(currentPoolAddress);

  if (exist) {
    const poolContract = new ethers.Contract(
      currentPoolAddress,
      IUniswapV3PoolABI.abi,
      getProvider()
    );
    console.log(poolContract);
    const [token0, token1, fee] = await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
    ]);

    return {
      token0,
      token1,
      fee,
    };
  } else {
    throw new Error("Pool does not exist");
  }
}

async function checkIfPoolExists(poolAddress) {
  const code = await getProvider().getCode(poolAddress);
  console.log(code !== "0x");
  return code !== "0x"; // If code is '0x', the contract does not exist
}

export async function getPoolImmutables(poolContract) {
  const [token0, token1, fee] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
  ]);

  const immutables = {
    token0: token0,
    token1: token1,
    fee: fee,
  };
  return immutables;
}

export async function getPoolState(poolContract) {
  const slot = poolContract.slot0();

  const state = {
    sqrtPriceX96: slot[0],
  };

  return state;
}