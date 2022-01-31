// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IBlogFields {
  /** title */
  title: string

  /** tag */
  tag: string

  /** skill */
  skill: string

  /** image */
  image: Asset

  /** detailImageFirst */
  detailImageFirst?: Asset | undefined

  /** detailImageSecond */
  detailImageSecond?: Asset | undefined

  /** text */
  text?: Document | undefined

  /** url */
  url: string
}

export interface IBlog extends Entry<IBlogFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'blog'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'blog'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
