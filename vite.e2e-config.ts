import defaultConfig from './vite.config';
import { mergeConfig, UserConfigExport } from 'vite';

export default mergeConfig(defaultConfig, {
  test: {
    include: ['**/*.e2e-spec.ts'],
  },
} as UserConfigExport);
