require('dotenv').config()

const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-oqlfoUgKtkk4SlJ7r9ISS5bx697Aq_PefFORgwhiYrQ',
  })

  return contentfulClient
    .getSpace('pp0157hswcch')
    .then((space) => space.getEnvironment('master'))
}
