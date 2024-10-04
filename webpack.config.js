const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.html$/,
            //     loader: "html-loader",
            // },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },
};