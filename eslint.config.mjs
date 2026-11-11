import nextConfig from "eslint-config-next/core-web-vitals";
import nextTsConfig from "eslint-config-next/typescript";

const config = [...nextConfig, ...nextTsConfig];
export default config;
