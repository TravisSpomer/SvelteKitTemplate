# Travis's SvelteKit template

I'm moving my existing [StaticSiteTemplate](https://github.com/TravisSpomer/StaticSiteTemplate) project over to [SvelteKit](https://kit.svelte.dev), a cool framework capable of building static sites. Even though SvelteKit offers a lot of additional functionality beyond my original Gulp-powered template, this template produces a faster dev experience and fewer dependencies.

This is for my own use and I don't have any plans to elevate it beyond my own needs, but you're welcome to take it and build on it from there. (Unless you prefer indenting with spaces, in which case GTFO.)

### **[🆕 Create a website with this template now](https://github.com/TravisSpomer/SvelteKitTemplate/generate)**

## What's not finished yet

**SvelteKit isn't a production release yet.** Sites built on this template are just static files so the risk is mitigated significantly, but it's still important to keep in mind.

This template itself is also not finished—I still need to rebuild:

* HTML minification
* A deployment workflow
* Redirect page generation

## How it differs from the basic SvelteKit starter project

I've preconfigured this template to be more amenable to the style of development that I prefer.

* It's set up to only output static files and not depend on any particular server.
* It assumes TypeScript everywhere.
* It enables ESLint and automatic code formatting.
* It enables SCSS.
* It enables Markdown (using MDsveX, which lets you mix Markdown and Svelte in the same file).
* It includes opinionated global styles to get beautiful text by default.

## Environment setup

### Required software

Download and install the latest stable versions of these products from their websites.

1. [Visual Studio Code](https://code.visualstudio.com)
2. [Node](https://nodejs.org/en/)

### Building and running

Whenever picking up a new version of the template, you need to make sure your dependencies are installed. In Visual Studio Code:

1. Terminal > Run Task
2. Install dependencies

Then, you can do a full production build of the project with:

1. Terminal > Run Build Task (Ctrl+Shift+B)

But, the most useful option will be the **Start** task, which starts the SvelteKit dev server, which starts instantly, watches for changes, and all sorts of cool stuff that I can't take credit for.

1. Terminal > Run Task
2. Start

To see the status of the server or build task, click the tools icon in the status bar, or Terminal > Show Running Tasks.

#### Without Visual Studio Code

If you want to use the project without Visual Studio Code, use the following scripts instead of the above:

* `npm install`: Install dependencies
* `npm start`: Start dev server
* `npm run build`: Production build
* `npm run serve`: Serve production build for testing

### Customizing for your site

At minimum, do this to customize the site for your purposes:

1.	Find and replace `SvelteKitTemplate` with the name of your site
2.	Update the copyright information in [`src/routes/$layout.svelte`](src/routes/$layout.svelte)
3.	Replace image assets in `static/images/app` with appropriate logos for your site
4.	Add appropriate information to the [app manifest](static/app.webmanifest)
5.	Give yourself credit in [`humans.txt`](static/humans.txt)

---

This template is © 2020-2021 Travis Spomer but released to the public domain under the [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0) license. This license does not apply to sites built with this template, nor to external libraries referenced by this template; only the template itself. It is provided as-is and no warranties are made as to its functionality or suitability.
