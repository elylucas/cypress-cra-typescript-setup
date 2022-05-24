import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    supportFile: './src/setupCy.ts',
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
