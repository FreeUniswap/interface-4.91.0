import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import { ReactNode, useMemo } from 'react'

const BLOCKED_ADDRESSES: string[] = []

export default function Blocklist({ children }: { children: ReactNode }) {
  const { account } = useWeb3React()
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
  if (blocked) {
    return (
      <div>
        <Trans>Blocked address</Trans>
      </div>
    )
  }
  return <>{children}</>
}
