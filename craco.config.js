module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        devServer: {
          ...webpackConfig.devServer,
          setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
              throw new Error('webpack-dev-server is not defined');
            }
            
            // Add any custom middleware here if needed
            
            return middlewares;
          }
        }
      };
    }
  }
};
