export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "qr-me",
  description: "A one stop shop for all your sharing needs",
  mainNav: [
    // {
    //   title: "Example",
    //   href: "/Example",
    // },
  ] as { title: string; href: string }[],
  sidebarNav: [
    {
      title: "Features",
      items: [
        {
          title: "Sharing",
          href: "/sharing",
          items: [],
        },
      ],
    },
    {
      title: "Social Links",
      items: [
        {
          title: "Github",
          href: "https://github.com/ahmad1702",
          items: [],
        },
        {
          title: "Email",
          href: "mailto:ahmad1702@gmail.com",
          items: [],
        },
      ],
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/ahmad-sandid-485b59164/",
    github: "https://github.com/ahmad1702",
  },
  locale: "en-US",
};
