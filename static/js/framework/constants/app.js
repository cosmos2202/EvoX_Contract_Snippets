export const KEY_LOGO_NAME = 'LOGO';

export const MENU_ITEMS = [
  { title: 'Marketplace',    link: 'https://marketplace.EvoX.org'                   },
  { title: 'Snippet',        link: 'https://marketplace.EvoX.org/snippet.html'      },
  { title: 'API',            link: 'https://marketplace.EvoX.org/api.html'          },
  { title: 'Use cases',      link: 'https://marketplace.EvoX.org/use-cases.html'    }
];

export const SOCIAL_ITEMS = [
  { title: 'twitter',     link: 'https://twitter.com/EvoX_project'  },
  { title: 'medium',      link: 'https://medium.com/@EvoX_project'  },
  { title: 'discord',     link: 'https://discord.gg/wE3rmYY'        },
  { title: 'telegram',    link: 'https://t.me/EvoXcoin'             },
  { title: 'github',      link: 'https://github.com/hyle-team/EvoX' }
];

export const FOOTER_ITEMS = [
  {
    title: 'EvoX.ORG',
    links: [
      { title: 'Main website',      link: 'https://EvoX.org'                                              },
      { title: 'Coinswap',          link: 'https://coinswap.EvoX.org'                                     },
      { title: 'Marketplace',       link: '#',                                            disabled: true  }
    ]
  },
  {
    title: 'ABOUT',
    links: [
      { title: 'Blog',              link: 'https://medium.com/@EvoX_project'                              },
      { title: 'Team',              link: 'https://EvoX.org/team.html'                                    },
      { title: 'Contacts',          link: '#',                                            disabled: true  }
    ]
  },
  {
    title: 'RESOURCES',
    links: [
      { title: 'Downloads',         link: 'https://EvoX.org/downloads.html'                               },
      { title: 'Roadmap',           link: 'https://EvoX.org/roadmap.html'                                 },
      { title: 'Documentation',     link: 'https://docs.EvoX.org/',                                       },
      { title: 'Explorer',          link: 'https://explorer.EvoX.org/',                                   },
      { title: 'Specifications',    link: 'https://docs.EvoX.org/docs/specifications',                    }
    ]
  },
  {
    title: 'LEGAL',
    links: [
      { title: 'Terms of use',      link: 'https://EvoX.org/terms-of-use.html',                           },
      { title: 'Privacy Policy',    link: 'https://EvoX.org/privacy-policy.html',                         },
      { title: 'Cookie Policy',     link: 'https://EvoX.org/cookie-policy.html',                          }

    ]
  }
];

export const t = {
  "sectionChart": {
    "total": {
      "title": [
        {
          "title": "Reserved Coins"
        }
      ],
      "titleShadow": "Total"
    },
    "done": {
      "title": [
        {
          "title": "Coins"
        },
        {
          "title": "Swapped"
        }
      ],
      "titleShadow": "Swapped"
    }
  },
  "sectionHero": {
    "title": [
      {
        "title": "EvoX"
      },
      {
        "title": "Contract",
        "blue": true
      },
      {
        "title": "Snippets"
      }
    ],
    "titleShadow": "Snippets",
    "description": "EvoX contracts mechanism was designed to facilitate secure, anonymous payments from your customers. Contract snippets offer a simplified way to arrange a deal. As a seller of services or items, you can publish a snippet on your website with predefined contract details. When applied by a potential buyer, the contract will be generated in the EvoX app ready to start.",
    "buttonOne": "Main website",
    "buttonOneLink": "https://EvoX.org",
    "buttonTwo": "User guide",
    "buttonTwoLink": "#how"
  },
  "sectionHow": {
    "steps": [
      {
        "icon": "step-one",
        "title": "Step 1",
        "subtitle": "Create Contract Template",
        "description": "Customise your contract proposal using the web form. You can hide, lock, and predefine any field to make your contract snippet suite best to your offer."
      },
      {
        "icon": "step-two",
        "title": "Step 2",
        "subtitle": "Publish Contract Snippet",
        "description": "Choose between dark or light color scheme and copy your contract snippet HTML to your webpage. A snippet can be as minimalistic as one button or contain editable fields."
      },
      {
        "icon": "step-three",
        "title": "Step 3",
        "subtitle": "Receive Contract Proposals",
        "description": "When a user clicks on your contract snippet the EvoX app will open for him and a predefined contract proposal will be ready for him to send, avoiding mistypes."
      }
    ]
  }
};
