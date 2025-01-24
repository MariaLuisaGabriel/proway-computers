
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/produtos/produtos-routing.module.ts": [
    {
      "path": "chunk-HGX7LV5E.js",
      "dynamicImport": false
    }
  ],
  "src/app/carrinho/carrinho.module.ts": [
    {
      "path": "chunk-6MYIDSA2.js",
      "dynamicImport": false
    }
  ],
  "src/app/contato/contato.module.ts": [
    {
      "path": "chunk-KRULRTEX.js",
      "dynamicImport": false
    }
  ],
  "src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts": [
    {
      "path": "chunk-ZWCNDK5B.js",
      "dynamicImport": false
    }
  ],
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-YR55O5OD.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 24363, hash: 'd8d3a756ec53ad1aa8201f03d2906f81da6548e9a217863c5d3c47ea01311b8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17606, hash: 'd20c4c2dfae75bed94e1f796e5df35e1704b19ee054e3bcb8b7d71ecfdd3e84b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LMFAVMDD.css': {size: 8264, hash: 'Y6DMlKB2Ipg', text: () => import('./assets-chunks/styles-LMFAVMDD_css.mjs').then(m => m.default)}
  },
};
