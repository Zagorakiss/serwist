/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

import { logger } from "./logger.js";

/**
 * @param groupTitle
 * @param urls
 *
 * @private
 */
function _nestedGroup(groupTitle: string, urls: string[]): void {
  if (urls.length === 0) {
    return;
  }

  logger.groupCollapsed(groupTitle);

  for (const url of urls) {
    logger.log(url);
  }

  logger.groupEnd();
}

/**
 * @param urlsToPrecache
 * @param  urlsAlreadyPrecached
 * @private
 */
export const printInstallDetails = (urlsToPrecache: string[], urlsAlreadyPrecached: string[]): void => {
  const precachedCount = urlsToPrecache.length;
  const alreadyPrecachedCount = urlsAlreadyPrecached.length;

  if (precachedCount || alreadyPrecachedCount) {
    let message = `Precaching ${precachedCount} file${precachedCount === 1 ? "" : "s"}.`;

    if (alreadyPrecachedCount > 0) {
      message += ` ${alreadyPrecachedCount} ` + `file${alreadyPrecachedCount === 1 ? " is" : "s are"} already cached.`;
    }

    logger.groupCollapsed(message);

    _nestedGroup("View newly precached URLs.", urlsToPrecache);
    _nestedGroup("View previously precached URLs.", urlsAlreadyPrecached);
    logger.groupEnd();
  }
};
