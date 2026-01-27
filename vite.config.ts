import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          return id;
        }
      },
      load(id) {
        if (id.startsWith('figma:asset/')) {
          const assetMap = {
            'ddf02415a17def7d561ee4228b7cb0b6932b3583': 'https://images.unsplash.com/photo-1760978631985-590e3b5f4057?q=80&w=1080',
            '90b2dde31070f1cfdb577bb7f01701b556b9d163': 'https://images.unsplash.com/photo-1766258959691-3aea033fda2c?q=80&w=1080',
            'd7e6ba1bdacfee6617542cb7390ca2dd060a7d94': 'https://images.unsplash.com/photo-1768337099525-1f2b4c872381?q=80&w=1080',
            '8489580f091250fe939b8e46287c6940fda635cc': 'https://images.unsplash.com/photo-1663153203139-40c3caf54a79?q=80&w=1080',
            'c86ed21c894df81179d303c3db317edc6377d776': 'https://images.unsplash.com/photo-1649848964263-2666b0c355a6?q=80&w=1080',
            '63eefb0e7bd6885b114e7cc9e4a2add4cd51fdd7': 'https://images.unsplash.com/photo-1766258959691-3aea033fda2c?q=80&w=1080',
            '3dcedcae2c65107d56519b6e63da92e622406118': 'https://images.unsplash.com/photo-1581840130788-0c20b3d547c0?q=80&w=1080',
            '9010532f58c36f80cd31df95bd4441a26e0cda9e': 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1080',
            'a309be07035dfb011348d1ed801b047546ee5971': 'https://images.unsplash.com/photo-1762278804729-13d330fad71a?q=80&w=1080',
            '0a354fe30b98fef25ceff8e41093f6de54a78e9b': 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
            '06d9b33715ebaa822bad91791975dbb5eca07022': 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
          };
          const hash = id.split('/')[1].split('.')[0];
          const url = assetMap[hash] || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
          return `export default "${url}"`;
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
