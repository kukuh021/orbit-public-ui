# orbit-public-ui components

Individually abstracted Chroma components deployed to [bit.dev](https://bit.cloud/iag/orbit-ui/)

Using Bit.dev workflow is a little different to the regular npm workflow that most developers are accustomed to, follow these instructions to get this repo up and running on your local machine.

## Install Bit

Install the Bit Version Manager on your machine using the following command:

```
npm i -g @teambit/bvm
```

Once BVM is installed you can install the latest version of Bit using:

```
bvm install
```

Configure `@chroma` as a Scoped Registry:

```
npm config set @iag:registry https://node.bit.dev
```

You should now be able to preview the components in their Bit collection locally by running:

```
bit start
```

In theory you should be able to also now run the storybook build locally however it seems that Bit wants the components compiled first so run:

```
bit compile
```

# Welcome to your Bit Workspace

To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```
## Importing components individually

All of the Chroma Bit components are available to preview in the Bit UI once you run `bit start` however once a component has been exported it is also available from the following url: [https://bit.dev/iag/orbit-ui](https://bit.cloud/iag/orbit-ui/)

Selecting a component will take you to the component overview page and at the top of the page is a button titled `Use` which will give you the import command for Bit, npm or Yarn depdending on how you prefer to install it.

Here are a couple of examples for the Alert component:

```
npm i @iag/orbit-ui.table
```

## Create a new Chroma component

To create a new component first run the following command to initialise a new directory in the `chroma-react-ui` workspace with demo code, docs and a test:

```
bit create react-component-js component-name
```

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


- **Demo Components**

A folder (unless the --empty flag was used) containing demo components are included in this workspace. These components are used to demonstrate the different features of Bit. If you would like to remove these components you can run the following command.

```jsx
bit remove "ui/*" --delete files
```

This removes the components from the bitmap as well as removes the files.


- **.gitignore**

Ignoring any files from version control
