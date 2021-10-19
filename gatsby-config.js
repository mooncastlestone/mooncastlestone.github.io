module.exports = {
  siteMetadata: {
    title: `Moon.log`,
    description: `프론트엔드 개발 여정을 담은 블로그, Moon.log 입니다.`,
    author: `Seong seok Moon`,
    siteUrl: `https://mooon3356.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-F2JN9J8VQN"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-vscode`,
                  options: {
                    theme: `One Dark Pro`,
                    extensions: ["material-theme"],
                  },
                },
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 590,
                  },
                },
                {
                  resolve: `gatsby-remark-image-attributes`,
                  options: {
                    dataAttributes: true,
                  },
                },
                {
                  resolve: `gatsby-remark-table-of-contents`,
                  options: {
                    exclude: "Table of Contents",
                    tight: false,
                    ordered: false,
                    fromHeading: 1,
                    toHeading: 6,
                    className: "table-of-contents",
                  },
                },
                {
                  resolve: `gatsby-remark-autolink-headers`,
                  options: {
                    offsetY: `300`,
                    className: `custom-class`,
                    maintainCase: false,
                    removeAccents: true,
                    elements: [`h1`, `h2`, `h3`, `h4`],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
