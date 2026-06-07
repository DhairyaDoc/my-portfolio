
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/certifications"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-portfolio",
    "route": "/my-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13608, hash: '99eafff3662335e1238e32cc61eb7d064f2b9fc88034d02e60cbd1fae48b8921', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1253, hash: 'b13d7dde453e57ff1dba78681a1678d6123d650caecae5c9f8f6b1b91b4b636e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 17347, hash: '774cb5f6fa778f383248df25eb2066acc0e3bd81e9181d24eca8674dadbe2c78', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25099, hash: 'd601a6811f16afd9e0e1a7b8d69943edee8a91209298da97cbfab8bfa82c130e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24565, hash: '745a406116f91c1ba75276cfc481d984861556735a76770aa28e1cff4e3f50b1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 38516, hash: '48fb1b47b739e5e110b220cd42f4c2d5798830c66a887481ed2bb01eea583f32', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 27211, hash: 'e52fad346880bded3d60f02405298ea92ca9654710773bd2a572724d073629a3', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30000, hash: 'ac5ca17062e29164bea68994e28f60e58a1f6f1864c993eb53499892312b522b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 35901, hash: 'ae53bea6554a202782a74c3edacb4b2cb4f21270163bbfa359e7979c476cddb7', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-ARN76LS5.css': {size: 21262, hash: 'UyTcxnTPNyw', text: () => import('./assets-chunks/styles-ARN76LS5_css.mjs').then(m => m.default)}
  },
};
