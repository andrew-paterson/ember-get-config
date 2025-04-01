/* global require */
import { getOwnConfig } from '@embroider/macros';
import loadConfigFromMeta from '@embroider/config-meta-loader';

let configModulePath = `${getOwnConfig().modulePrefix}/config/environment`;

export default loadConfigFromMeta(configModulePath);
