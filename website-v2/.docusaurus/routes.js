
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','899'),
  exact: true,
},
{
  path: '/blog/2018/10/08/',
  component: ComponentCreator('/blog/2018/10/08/','74f'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','520'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','385'),
  exact: true,
},
{
  path: '/docs/implementations',
  component: ComponentCreator('/docs/implementations','bf3'),
  exact: true,
},
{
  path: '/docs/motivations',
  component: ComponentCreator('/docs/motivations','3aa'),
  exact: true,
},
{
  path: '/docs/protocol',
  component: ComponentCreator('/docs/protocol','6ed'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
