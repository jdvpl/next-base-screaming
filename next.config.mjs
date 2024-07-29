const contentSecurityPolicy = {
    "connect-src": "'self' * data:",
    "style-src": "'self' 'unsafe-inline' *.visualwebsiteoptimizer.com/ https://mpsnare.iesnare.com/general5/ https://mpsnare.iesnare.com/general5/* http://localhost:3000 https://dev.bancocajasocialsa.org/ https://qa.bancocajasocialsa.org/ https://digital.bancocajasocial.com/ https://fonts.googleapis.com/ https://optimize.google.com https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://ci-first.iovation.com/",
    "script-src": `'self' 'unsafe-eval' *.visualwebsiteoptimizer.com/ https://static.hotjar.com https://dev.bancocajasocialsa.org/cdt https://unpkg.com/@grafana/faro-web-sdk@%5E1.0.0/dist/bundle/faro-web-sdk.iife.js https://qa.bancocajasocialsa.org/cdt https://digital.bancocajasocial.com/cdt https://optimize.google.com https://www.googleanalytics.com https://www.google-analytics.com https://www.googletagmanager.com/ https://www.googleoptimize.com/ https://www.google.com/recaptcha/ https://www.gstatic.com/ https://embed.tawk.to/ https://static.hotjar.com/ https://script.hotjar.com/ https://vars.hotjar.com/ https://connect.facebook.net/ https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://ci-first.iovation.com/`,
    "img-src": "'self' *.visualwebsiteoptimizer.com/ https://dev.bancocajasocialsa.org/ https://qa.bancocajasocialsa.org/ https://masiv3.s3.amazonaws.com/ImageFiles/* https://digital.bancocajasocial.com/ https://v2assets.zopim.io/ https://bancocajasocial.zendesk.com/ https://www.googletagmanager.com/ https://www.google.com/ads/ https://www.google.com.co/ads/ https://www.facebook.com/ https://www.google-analytics.com/ https://optimize.google.com https://www.google.com/ https://www.google.com.co/ https://www.gstatic.com/ https://static.zdassets.com/ https://script.hotjar.com https://ci-first.iovation.com/ data:",
    "font-src": "'self' *.visualwebsiteoptimizer.com/ https://sc-static.net/font/Graphik-Regular.ttf https://fonts.gstatic.com/ https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://script.hotjar.com https://ci-first.iovation.com/",
    "worker-src": "http://localhost:*/cdt/jsBiometria/workers/cv.worker.js http://*/cdt/jsBiometria/workers/cv.worker.js https://*/cdt/jsBiometria/workers/cv.worker.js https://*.org/cdt/jsBiometria/workers/cv.worker.js https://*.com/cdt/jsBiometria/workers/cv.worker.js http://localhost:*/cdt/jsBlackBox/config.js http://*/cdt/jsBlackBox/config.js https://*/cdt/jsBlackBox/config.js https://*.org/cdt/jsBlackBox/config.js https://*.com/cdt/jsBlackBox/config.js http://localhost:*/cdt/jsBlackBox/loader_only.js http://*/cdt/jsBlackBox/loader_only.js https://*/cdt/jsBlackBox/loader_only.js https://*.org/cdt/jsBlackBox/loader_only.js https://*.com/cdt/jsBlackBox/loader_only.js https://dev.bancocajasocialsa.org/cdt/ https://qa.bancocajasocialsa.org/cdt/ https://digital.bancocajasocial.com/cdt/ https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://ci-first.iovation.com/ blob:",
    "style-src-elem": `'self' 'unsafe-inline' https://sc-static.net/sc-pixel-helper.min.js *.visualwebsiteoptimizer.com/ https://js-cdn.dynatrace.com/jstag/1700f2c78c0/bf60654rqz/f6d16101efa5bdfb_complete.js http://localhost:3000 https://dev.bancocajasocialsa.org/ https://qa.bancocajasocialsa.org/ https://digital.bancocajasocial.com/ https://fonts.googleapis.com/ https://optimize.google.com https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://ci-first.iovation.com/ data:`,
    "script-src-elem": `'self' 'unsafe-inline' 'report-sample' 'unsafe-eval' https://js-cdn.dynatrace.com/jstag/1700f2c78c0/bf60654rqz/f6d16101efa5bdfb_complete.js https://sc-static.net/sc-pixel-helper.min.js *.visualwebsiteoptimizer.com/ https://mpsnare.iesnare.com/general5/* https://mpsnare.iesnare.com/general5/5FExse%2BoA1134BhiwCF2EeQ1TfisPJGha4CpVG2nd7E%3D/wdp.js https://mpsnare.iesnare.com/* https://dev.bancocajasocialsa.org/ https://qa.bancocajasocialsa.org/ https://digital.bancocajasocial.com/ https://unpkg.com/@grafana/faro-web-sdk@%5E1.0.0/dist/bundle/faro-web-sdk.iife.js https://www.googletagmanager.com/ https://www.google.com/recaptcha/ https://www.gstatic.com/ https://embed.tawk.to/ https://static.hotjar.com/ https://script.hotjar.com/ https://vars.hotjar.com/ https://connect.facebook.net/ https://www.google-analytics.com/ https://www.googleoptimize.com/ https://optimize.google.com https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://ci-first.iovation.com/`,
    "frame-ancestors": "'self' *.visualwebsiteoptimizer.com/ https://dev.bancocajasocialsa.org/ https://qa.bancocajasocialsa.org/ https://digital.bancocajasocial.com/ https://ci-first.iovation.com/",
    "frame-src": "https://dev.bancocajasocialsa.org/cdt/ https://qa.bancocajasocialsa.org/cdt/ https://digital.bancocajasocial.com/cdt/ https://bid.g.doubleclick.net/ https://vars.hotjar.com/ https://static.hotjar.com/ https://script.hotjar.com/ https://www.facebook.com/ https://optimize.google.com https://optimize.google.com/ https://www.google.com/ https://www.google.com.co/ https://static.zdassets.com/ https://ci-first.iovation.com/",
}

const cspString = Object.entries(contentSecurityPolicy)
    .map(([key, value]) => `${key} ${value};`)
    .join(" ")

const nextConfig = {
    basePath: "/vivienda",
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    async headers() {
        return [{
            source: "/:path*",
            headers: [{
                    key: "Strict-Transport-Security",
                    value: "max-age=31536000; includeSubDomains; preload",
                },
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "microphone=(), geolocation=()" },
                {
                    key: "Cache-Control",
                    value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
                },
                {
                    key: "Pragma",
                    value: "no-cache",
                },
                {
                    key: "Expires",
                    value: "0",
                },
                {
                    key: "Content-Security-Policy",
                    value: cspString,
                },
            ],
        }, ]
    },
    async rewrites() {
        return [{
            source: "/iojs/:path*",
            destination: "https://ci-first.iovation.com/:path*",
        }, ]
    },
    productionBrowserSourceMaps: process.env.NODE_ENV === "development",
}

export default nextConfig