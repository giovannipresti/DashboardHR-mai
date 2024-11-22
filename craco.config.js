module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        devServer: {
          ...webpackConfig.devServer,
          // Remove deprecated options
          onBeforeSetupMiddleware: undefined,
          onAfterSetupMiddleware: undefined,
          // Use the new setupMiddlewares option
          setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
              throw new Error('webpack-dev-server is not defined');
            }

            // Before middleware
            if (typeof webpackConfig.devServer?.onBeforeSetupMiddleware === 'function') {
              webpackConfig.devServer.onBeforeSetupMiddleware(devServer);
            }

            // Add any custom middleware here if needed

            // After middleware
            if (typeof webpackConfig.devServer?.onAfterSetupMiddleware === 'function') {
              webpackConfig.devServer.onAfterSetupMiddleware(devServer);
            }

            return middlewares;
          }
        }
      };
    }
  }
};
