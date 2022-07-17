import htmlTemplate from "rollup-plugin-generate-html-template";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";

export default {
  input: "src/js/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    scss({
      insert: true,
      sourceMap: true,
    }),
    htmlTemplate({
      template: "src/index.html",
      target: "index.html",
    }),
  ],
};
