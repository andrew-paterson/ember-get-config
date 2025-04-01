import { getOwnConfig } from '@embroider/macros';

export default loadConfigFromMeta(getOwnConfig().modulePrefix);

function loadConfigFromMeta(prefix) {
  console.log(prefix);
  var _a;

  let metaName = `${prefix}/config/environment`;

  try {
    let rawConfig =
      (_a = document
        .querySelector(`meta[name="${metaName}"]`)
        .getAttribute('content')) !== null && _a !== void 0
        ? _a
        : '{}';

    let config = JSON.parse(decodeURIComponent(rawConfig));

    return config;
  } catch (err) {
    return `Could not read config from meta tag with name "${metaName}".`;
  }
}
