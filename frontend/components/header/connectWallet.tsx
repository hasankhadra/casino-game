import { useEffect, useState } from 'react'
import { useConnect } from 'wagmi'

export function ConnectWallet() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const unsupportedMsg: string = " (unsupported)"
  const [dodo, setDodo] = useState("");

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