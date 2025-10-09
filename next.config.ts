const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: { unoptimized: true },    
  trailingSlash: true,              
};
export default nextConfig;
