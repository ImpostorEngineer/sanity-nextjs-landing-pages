export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606a1990d977d37c3cb548a1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mj45xsc2',
                  apiId: '9e393460-eb11-47ae-878e-946de81d132d'
                },
                {
                  buildHookId: '606a19905f1aca84251b97f0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b97atega',
                  apiId: '64dd3cb2-1ed4-4a56-97f5-fdb37a24f728'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ImpostorEngineer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b97atega.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
