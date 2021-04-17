# Travis's SvelteKit template

I'm moving my existing [StaticSiteTemplate](https://github.com/TravisSpomer/StaticSiteTemplate) project over to [SvelteKit](https://kit.svelte.dev), a cool framework capable of building static sites. Even though SvelteKit offers a lot of additional functionality beyond my original Gulp-powered template, this template produces a faster dev experience and fewer dependencies.

This is for my own use and I don't have any plans to elevate it beyond my own needs, but you're welcome to take it and build on it from there. (Unless you prefer indenting with spaces, in which case GTFO.)

### **[🆕 Create a website with this template now](https://github.com/TravisSpomer/SvelteKitTemplate/generate)**

## What's not finished yet

**SvelteKit isn't a production release yet.** Sites built on this template are just static files so the risk is mitigated significantly, but it's still important to keep in mind.

There are two known issues that are a result of unfinished SvelteKit features:

* There's a Flash of Unstyled Content due to there not being a way to have a true global SCSS file. ([Potential workaround](https://github.com/sveltejs/kit/issues/606#issuecomment-819385878))
* [HTML isn't minified](https://github.com/sveltejs/kit/issues/568).

## How it differs from the basic SvelteKit starter project

I've preconfigured this template to be more amenable to the style of development that I prefer.

* It's set up to only output static files and not depend on any particular server.
* It assumes TypeScript everywhere.
* It enables ESLint and automatic code formatting.
* It enables SCSS.
* It enables Markdown (using MDsveX, which lets you mix Markdown and Svelte in the same file).
* It includes opinionated global styles to get beautiful text by default.
* It includes a GitHub Actions publishing workflow to deploy to an Azure Storage static website that:
	* Optionally purges an Azure CDN.
	* Optionally allows you to [generate redirect pages using meta http-equiv](https://github.com/marketplace/actions/create-html-redirects).
	* Marks CSS and JS files as immutable for maximum caching performance.

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

1. Find and replace `SvelteKitTemplate` with the name of your site
2. Update the copyright information in [`src/routes/$layout.svelte`](src/routes/$layout.svelte)
3. Replace image assets in `static/images/app` with appropriate logos for your site
4. Add appropriate information to the [app manifest](static/app.webmanifest)
5. Give yourself credit in [`humans.txt`](static/humans.txt)
6. If you don't need to create redirect pages, you can delete [`routes.json`](routes.json) and remove the `Create redirects` task from the deployment workflow.

### Creating routes and redirects

Use [`routes.json`](routes.json) to configure routes and redirects for the app. The workflow will generate the appropriate redirect page files.

(If you publish to Azure Static Web Apps or another service that supports server routing rules, ignore this file and configure routing rules appropriately for your server.)

#### Example routes.json

```json
{
	"routes": [
		{ "route": "default.aspx", "serve": "/" }
	]
}
```

## Deploying to the web

You have a few options:

### Deploying to Azure Static Web Apps

You can deploy to Azure Static Web Apps with very minimal configuration:

* When creating the app in Azure Portal, set the build artifacts folder to `build`.

Once your repo and Azure are set up in this way, whenever your default branch is changed, GitHub will automatically build your site and publish it to Azure without any manual steps.

### Deploying to Azure Blob Storage

You can easily deploy to an Azure Blob Storage static website using GitHub Actions (if your project is on GitHub):

* [Generate a SAS URL for your storage account and create a Secret in your repo](https://github.com/marketplace/actions/deploy-to-azure-storage#how-to-get-a-sas-url-and-save-it).
* In GitHub, open this repo's [`.github/workflows/publish.yml`](.github/workflows/publish.yml), edit it, and uncomment the two `push:` and `branches: [ $default-branch ]` lines at the top to enable automatic deployments.
	* If you prefer, you can manually trigger a deployment from the Actions tab.
	* By default, GitHub won't allow you to edit that file from Visual Studio Code, only from github.com.

Once your repo is set up this way, whenever your default branch is changed, GitHub will automatically build your site and publish it to Azure without any manual steps.

Tip: You can use my [`deploy-to-azure-storage`](https://github.com/marketplace/actions/deploy-to-azure-storage) Action to automatically deploy static sites built with other templates, too.

### Deploying to any static file host

You can also deploy the site to any static file host. Just run a production build (`npm run build`; see above) and upload the contents of the `build` folder to a host of your choice.

### Optionally purging an Azure CDN

The deployment workflow included with this template can also automatically purge an associated Azure CDN endpoint whenever the site's contents change, to minimize the length of time when files are stale. Open [`.github/workflows/publish.yml`](.github/workflows/publish.yml) on github.com, and see the instructions near `ENABLE_CDN_PURGE`. Note that CDN purging requires a separate secret in addition to the `DEPLOY_SAS_URL` secret you already set up.

---

This template is © 2020-2021 Travis Spomer but released to the public domain under the [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0) license. This license does not apply to sites built with this template, nor to external libraries referenced by this template; only the template itself. It is provided as-is and no warranties are made as to its functionality or suitability.
