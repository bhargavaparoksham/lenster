import {
  LensterCollectModule,
  LensterFollowModule
} from '@generated/lenstertypes'
import getUniswapURL from '@lib/getUniswapURL'
import trackEvent from '@lib/trackEvent'
import React, { FC } from 'react'

interface Props {
  module: LensterCollectModule | LensterFollowModule
}

const Uniswap: FC<Props> = ({ module }) => {
  return (
    <div className="space-y-1">
      <div className="text-sm">
        You don't have enough <b>{module?.amount?.asset?.symbol}</b>
      </div>
      <a
        href={getUniswapURL(
          parseFloat(module?.amount?.value),
          module?.amount?.asset?.address
        )}
        className="flex items-center space-x-1.5 text-xs font-bold text-pink-500"
        target="_blank"
        rel="noreferrer noopener"
        onClick={() =>
          trackEvent(
            `open uniswap to swap ${module?.amount?.asset?.symbol?.toLowerCase()}`
          )
        }
      >
        <img
          src="https://assets.lenster.xyz/images/brands/uniswap.png"
          className="w-5 h-5"
          height={20}
          width={20}
          alt="Uniswap"
        />
        <div>Swap in Uniswap</div>
      </a>
    </div>
  )
}

export default Uniswap
