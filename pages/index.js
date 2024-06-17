import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
import myTokenAbi from '../artifacts/contracts/MyToken.sol/MyToken.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8;
  font-family: 'Roboto', sans-serif;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    color: #333;
    font-size: 2.5rem;
    margin: 0;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

function App() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [myToken, setMyToken] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [recipient, setRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [allowanceAmount, setAllowanceAmount] = useState('');
  const [spender, setSpender] = useState('');
  const [allowance, setAllowance] = useState('');
  const [mintAmount, setMintAmount] = useState('');
  const [burnAmount, setBurnAmount] = useState('');

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const myTokenABI = myTokenAbi.abi;

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        setEthWallet(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (ethWallet && account) {
      const provider = new ethers.providers.Web3Provider(ethWallet);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(contractAddress, myTokenABI, signer);
      setMyToken(tokenContract);
    }
  }, [ethWallet, account]);

  useEffect(() => {
    const getBalance = async () => {
      if (myToken) {
        const balance = await myToken.balanceOf(account);
        setBalance(balance.toNumber());
      }
    };
    getBalance();
  }, [myToken, account]);

  const handleMint = async () => {
    if (myToken && mintAmount) {
      const tx = await myToken.mint(parseInt(mintAmount));
      await tx.wait();
      const balance = await myToken.balanceOf(account);
      setBalance(balance.toNumber());
    }
  };

  const handleBurn = async () => {
    if (myToken && burnAmount) {
      const tx = await myToken.burn(parseInt(burnAmount));
      await tx.wait();
      const balance = await myToken.balanceOf(account);
      setBalance(balance.toNumber());
    }
  };

  const handleTransfer = async () => {
    if (myToken) {
      const tx = await myToken.transfer(recipient, parseInt(transferAmount));
      await tx.wait();
      const balance = await myToken.balanceOf(account);
      setBalance(balance.toNumber());
    }
  };

  const handleApprove = async () => {
    if (myToken) {
      const tx = await myToken.approve(spender, parseInt(allowanceAmount));
      await tx.wait();
      const allowance = await myToken.allowance(account, spender);
      setAllowance(allowance.toNumber());
    }
  };

  return (
    <Container>
      <Header>
        <h1>MyToken DApp</h1>
      </Header>
      <Card>
        <p>Account: {account}</p>
        <p>Balance: {balance}</p>
        <div>
          <input
            type="text"
            placeholder="Mint Amount"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
          />
          <Button onClick={handleMint}>Mint Tokens</Button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Burn Amount"
            value={burnAmount}
            onChange={(e) => setBurnAmount(e.target.value)}
          />
          <Button onClick={handleBurn}>Burn Tokens</Button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          <Button onClick={handleTransfer}>Transfer Tokens</Button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Spender Address"
            value={spender}
            onChange={(e) => setSpender(e.target.value)}
          />
          <input
            type="text"
            placeholder="Allowance Amount"
            value={allowanceAmount}
            onChange={(e) => setAllowanceAmount(e.target.value)}
          />
          <Button onClick={handleApprove}>Approve Allowance</Button>
        </div>
        
        <p>Allowance: {allowance}</p>
      </Card>
    </Container>
  );
}

export default App;
