<!--
# Public and Assets

-   public folder is for anything that is being imported into your index.html
-   src/assets folder is for anything that is imported in your js/ts/jsx/tsx/...etc... files that are in the src folder.

# Example of referring files that are in public folder

---------- index.html ----------
<head>
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>

# Example of referring files that are in the src/assets folder

---------- src/App.tsx ----------

import Logo from "./assets/logo.svg"

export default () => {

return <img src={Logo} />
}
-->
