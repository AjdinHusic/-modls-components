export * from "https://pkgjs.space/modls/core/latest";

import jss from "./jss/dist/jss.bundle.js";
import preset from "./jss-preset-default/dist/jss-preset-default.bundle.js";

jss.setup(preset());

export default jss;