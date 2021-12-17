import * as contentful from 'contentful'
import { IBlogFields } from '../../@types/generated/contentful'

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
}

export const createClient = (): contentful.ContentfulClientApi => {
  return contentful.createClient(config)
}

export const getBlogContents = async () => {
  const client = createClient()
  try {
    const response = await client.getEntries<IBlogFields>({
      content_type: process.env.CTF_CONTENT_TYPE_ID,
      order: '-sys.createdAt',
    })
    return response
  } catch (error) {
    throw new Error(error)
  }
}
