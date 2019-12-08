module.exports = {
  build: {
    extractCSS: true,
    lazy: true
  },
  theme: "./theme/src",
  siteConfig: {
    url: 'https://www.h404bi.com',
    title: 'The Art of Chawye Hsu',
    description: 'Personal Website of Chawye Hsu.',
    keywords: 'h404bi,blog,blogger,个人博客',
    author: 'Chawye Hsu',
    disqusjs: {
      shortname: 'h404bi',
      sitename: "The Art of Chawye Hsu",
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'h404bi'
    }
  },
  themeConfig: {
    since: '2015',
    pswp: true,
    header: {
      logo_url: '/',
      nav: [
        {
          name: 'Blog',
          path: '/blog'
        },
        {
          name: 'Guestbook',
          path: '/guestbook'
        },
        {
          name: 'Links',
          path: '/links'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    },
    footer: {
      social_network: [
        {
          icon: 'logo-twitter',
          path: 'https://twitter.com/chawyehsu'
        },
        {
          icon: 'logo-instagram',
          path: 'https://www.instagram.com/chawyehsu/'
        },
        {
          icon: 'logo-github',
          path: 'https://github.com/h404bi'
        },
        {
          icon: 'logo-game-controller-b',
          path: 'https://steamcommunity.com/id/h404bi/'
        },
        {
          icon: 'ios-musical-notes',
          path: 'https://music.163.com/#/user/home?id=35631431'
        }
      ]
    }
  },
  markdown: {
    plugins: [
      {
        resolve: 'markdown-it-emoji'
      },
      {
        resolve: 'markdown-it-footnote'
      },
      {
        resolve: 'markdown-it-cjk-breaks'
      },
      {
        resolve: 'markdown-it-attrs'
      },
      {
        resolve: 'markdown-it-implicit-figures',
        options: {
          dataType: true,
          figcaption: true
        }
      }
    ]
  },
  permalinks: {
    post: '/blog/:year/:month/:slug',
    page: '/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: '25da54bb9d300c118148dcad780da73b'
      }
    },
    {
      resolve: 'saber-plugin-ga-lite',
      options: {
        trackId: 'UA-91882040-1',
        galiteUrl: 'https://unpkg.com/ga-lite'
      }
    },
    {
      resolve: 'saber-plugin-google-adsense',
      options: {
        adClientId: 'ca-pub-4381515676738667'
      }
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml',
        jsonFeed: '/feed/index.json'
      }
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 12,
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name'
        },
        categoriesMap: {
          '数码': 'digital',
          '技术': 'technology',
          '杂谈': 'uncategorized'
        }
      }
    },
    {
      resolve: './packages/saber-plugin-image',
      options: {
        sizes: [1200, 720, 480],
        placeholder: true,
        blendIn: false
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml'
      }
    }
  ]
}
