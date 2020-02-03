module.exports = {
    publicPath: '/personal-portfolio',
    outputDir: 'docs',
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/main.scss";`
            }
        }
    }
};
