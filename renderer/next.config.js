/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.plugins.push(require('unplugin-auto-import/webpack').default({
      imports: [{
        from:'react',
        imports:['FC'],
        type:true,
      }, 'react-router-dom'],
      // dts: true
      dts: './renderer/auto-imports.d.ts',
    }))
    return config
  },
}
