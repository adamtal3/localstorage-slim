import type { LocalStorageConfig } from './types';
declare const _default: {
    config: LocalStorageConfig;
    set: <T = unknown>(key: string, value: T, localConfig?: LocalStorageConfig) => boolean | void;
    get: <T_1 = unknown>(key: string, localConfig?: LocalStorageConfig) => T_1 | null;
    flush: (force?: boolean, localConfig?: LocalStorageConfig) => false | void;
    clear: (localConfig?: LocalStorageConfig) => false | undefined;
    remove: (key: string, localConfig?: LocalStorageConfig) => false | undefined;
};
export default _default;
