import { useEffect, useState } from 'react'
import {  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName, } from 'wagmi'

export function ConnectWallet() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
    const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address });
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
    if (isConnected) {
      return (
        <div>
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <div>Connected to {connector.name}</div>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )
    }
  return (
    <div>
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}

          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  )
}