import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { CardText } from 'src/components/molecules/CardText'
import { getBlogContents } from 'src/contentful'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { ImageList } from 'src/components/molecules/ImageList'

export const getStaticProps: GetStaticProps = async () => {
  const response = await getBlogContents()
  return {
    props: { posts: response.items || [] },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getBlogContents()
  const paths = response.items.map((item) => {
    return {
      params: {
        id: item.sys.id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

type Props = {
  className?: string
  posts: any[]
}

const FCDetailBase: React.FC<Props> = ({ className, posts }) => {
  const router = useRouter()
  const detailPosts = posts
    .map((post) => {
      if (post.sys.id === router.query.id) {
        return post
      } else {
        return
      }
    })
    .filter((post) => post)

  return (
    <div className={className}>
      <CardText
        labelText={detailPosts[0].fields.tag}
        skillText={detailPosts[0].fields.skill}
        companyName={detailPosts[0].fields.title}
      />
      <ReactMarkdown className={`${className}__text`}>
        {detailPosts[0].fields.text.content[0].content[0].value}
      </ReactMarkdown>
      <ImageList
        imageFirst={`https:${detailPosts[0].fields.image.fields.file.url}`}
        imageSecond={`https:${detailPosts[0].fields.detailImageFirst?.fields.file.url}`}
        imageThird={`https:${detailPosts[0].fields.detailImageSecond?.fields.file.url}`}
      />
    </div>
  )
}
export const DetailBase = styled(FCDetailBase)`
  width: 97%;
  margin: 0 auto;
  padding: 75px 90px 130px 90px;
  background-color: #fff;
  border-radius: 0 0 46px 46px;
  ${({ theme }) => theme.media.sp`
    padding: 70px 30px;
  `}
  &__text {
    margin-bottom: 75px;
  }
`

export default DetailBase
