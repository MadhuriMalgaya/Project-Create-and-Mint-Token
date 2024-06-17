# Project Create and Mint Token (MyToken)
This project is a simple Ethereum DApp that demonstrates basic token functionalities using Solidity, Hardhat, and React. The Solidity contract MyToken allows minting, burning, transferring tokens, and managing allowances. Hardhat is used for deploying and testing the smart contract, while the React front-end enables user interaction with the contract. The project is developed and managed using VS Code IDE.

# Project Description
This project is a decentralized application (DApp) built on the Ethereum blockchain, showcasing fundamental token operations using Solidity, Hardhat, and React. The core of the project is a smart contract named MyToken, written in Solidity, which implements basic ERC-20 token functionalities such as minting new tokens, burning existing tokens, transferring tokens between addresses, and managing token allowances.

The development workflow utilizes Hardhat, a comprehensive Ethereum development environment, to compile, deploy, and test the MyToken smart contract. The deployment script ensures the contract is deployed to an Ethereum network and logs the contract address upon successful deployment.

The front-end interface is developed using React, providing a user-friendly interface to interact with the deployed MyToken contract. Users can connect their Ethereum wallets, view their token balance, and perform actions such as minting, burning, transferring tokens, and setting allowances directly from the application. The interface is styled with styled-components for a clean and responsive design.

Overall, this project serves as a practical example of building and deploying a DApp with a focus on token management, using modern Ethereum development tools and a structured development environment in VS Code.

# Getting Started
**Executing program**
* Step-by-Step Commands to run the program

```shell
npm install
npm install --save-dev hardhat
npx hardhat
npx hardhat node
npx hardhat run --network localhost scripts/deploy.js
npm run dev
```
Here, I use Metamask MetaMask is a free web and mobile crypto wallet that allows users to store and swap cryptocurrencies, interact with the Ethereum blockchain ecosystem, and host a growing array of decentralized applications (dApps).

![image](https://github.com/MadhuriMalgaya/Project-Create-and-Mint-Token/assets/129099016/fb3fdb4f-303e-4687-81b3-cc096b007d85)

# Authors
Madhuri Malgaya
madhumalgaya@gmail.com

# License
This project is licensed under the MIT License - see the LICENSE.md file for details
