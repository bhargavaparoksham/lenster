import { Tooltip } from '@components/UI/Tooltip'
import { LensterPost } from '@generated/lenstertypes'
import { ChatAlt2Icon } from '@heroicons/react/outline'
import humanize from '@lib/humanize'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  post: LensterPost
}

const Comment: FC<Props> = ({ post }) => {
  return (
    <motion.button whileTap={{ scale: 0.9 }} aria-label="Comment">
      <Link href={`/posts/${post?.id ?? post?.pubId}`} prefetch={false}>
        <a
          href={`/posts/${post?.id ?? post?.pubId}`}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-400"
        >
          <div className="p-1.5 rounded-full hover:bg-blue-300 hover:bg-opacity-20">
            <Tooltip placement="top" content="Comment" withDelay>
              <ChatAlt2Icon className="w-[18px]" />
            </Tooltip>
          </div>
          {post.__typename === 'Mirror'
            ? post?.mirrorOf?.stats?.totalAmountOfComments > 0 && (
                <div className="text-xs">
                  {humanize(post?.mirrorOf?.stats?.totalAmountOfComments)}
                </div>
              )
            : post?.stats?.totalAmountOfComments > 0 && (
                <div className="text-xs">
                  {humanize(post?.stats?.totalAmountOfComments)}
                </div>
              )}
        </a>
      </Link>
    </motion.button>
  )
}

export default Comment
