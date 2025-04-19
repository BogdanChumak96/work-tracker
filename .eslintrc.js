module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["boundaries"],
    extends: ["plugin:boundaries/recommended"],
    rules: {
        "no-console": "error",
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "widgets",  allow: ["features", "shared"] },
            { from: "features", allow: ["entities", "shared"] },
            { from: "entities", allow: ["shared"] },
            { from: "shared",   allow: ["shared"] },
          ],
        },
      ],
      "boundaries/no-unknown": "error",          
    },
    settings: {
      "boundaries/elements": [
        { type: "widgets",  pattern: "src/widgets/**"  },
        { type: "features", pattern: "src/features/**" },
        { type: "entities", pattern: "src/entities/**" },
        { type: "shared",   pattern: "src/shared/**"   },
      ],
      "import/resolver": {                       
        typescript: { project: "tsconfig.json" },
        node: { extensions: [".js",".jsx",".ts",".tsx"] },
      },
    },
  };