module.exports = {
    experimental: {
        async headers() {
        return [
            {
            source: '/(.*)?',
            headers: [
                {
                key: 'Access-Control-Allow-Origin',
                value: '*'
                },
                {
                key: 'Access-Control-Allow-Methods',
                value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
                },
            ]
            }
        ]
        }
    },
  assetPrefix: process.env.NEXT_PUBLIC_APP_DOMAIN,
}