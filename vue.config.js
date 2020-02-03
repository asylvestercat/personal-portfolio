module.exports = {
    publicPath: '/personal-portfolio',
    outputDir: 'docs',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/main.scss";`
            }
        }
    }
};
