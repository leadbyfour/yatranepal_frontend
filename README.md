# Frontend App for Yatra Nepal

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies required for the project.

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Setting Up the formatter:

### For VSCode

1. Find or Create `.vscode > settings.json` on root of your project
2. Edit the content of the file to:

   ```
   {
     "editor.tabSize": 2,
     "editor.detectIndentation": false,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```

3. Search and install the extension `Prettier - Code formatter`
4. Search `default formatter` in VSCode settings and select `Prettier - Code formatter`
5. Search `require config` in VSCode Settings and make sure `Prettier: Require Config` field is checked
6. Search `on save` in VSCode Settings and make sure `Editor: Format On Save` field is checked
