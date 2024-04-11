> [!WARNING]
> **Ongoing Development:** This is an ongoing project with heavy development underway. Not ready for usage. Contributions are welcomed and more documentation will be uploaded as the project develops.

# Llane UI Framework

Llanne UI is an open-source project, ready-to-use React.js components library that facilitates the development of React.js frontend applications and websites, natively compatible with mobile device screens. The idea of developing a standard UI framework for React.js and TypeScript comes from my own need for standardising UI components across different applications I am working on for consistent cross-platform UI/UX and an efficient way to update multiple frontend UIs all at once.

## Install Llane UI

You can install LLane UI by running:
```shell
npm install
```

## Build Llane UI

> [!NOTE]
> If you have already built Llane UI and wants to rebuild it, you will need to use the commands `npm run rebuild-unix` if you are on Linux or MacOs or `npm run rebuild-windows` if you are on Windows.

You can build Llane UI by running the following command:
```shell
npm run build
```

This will compile Llane UI to your `/dist` folder, which will then be used by your application to import the Llane UI components.

## Build Custom Icon Library

> [!NOTE]
> You will need to have **[Python](https://www.python.org/downloads/)** installed to build your custom icon library.

By default, LLane UI uses a pre-compiled set of **[react-feather](https://feathericons.com/)** icons with some additions, but you can add, remove, or customise the icon library with your own `.svg` files. Follow the steps below to build your custom icon library:

1. Add, remove, and customise your `.svg` files inside the `/src/Icons/library` folder. You will need to adhere to the Kebab-Case naming convention when naming or renaming your files. Alternatively, you can adjust the `build-icon-library.py` script to fit your naming style if you prefer not to use Kebab-Case.
2. Inside the root folder, execute the `build-icon-library.py` script to build your library:
    ```shell
    python build-icon-library.py
    ```
3. Now, you will need to rebuild the LLane UI framework to compile the new library and incorporate the new export structure:
    ```shell
    npm run build
    ```

This process will update the `/dist` folder, creating all the new icons and a new export structure that you can use in your project.

## Testing Llane UI

You can build and run the test application by using the following command:
```shell
npm run test
```

This will open a test HTML page with all the available components rendered. You can use this to make modifications to the components and test them in real-time.

## Components List (A-Z)

Full list of supported components. Each component might have their own custom props and I will provide detailed explanation on each one when the full documentation for the project is published.

- **Box**
- **Button**
- **Container**
- **Divider**
- **Dropdown**
- **FlexContainer**
- **Footer**
- **GridContainer**
- **Header**
- **Icons**
- **Input**
- ✅ **Link:** `Link` `LinkWrapper`
- ✅ **Typography:** `HeadingExtraLarge` `HeadingLarge` `Heading` `HeadingSmall` `HeadingExtraSmall` `HeadingTiny` `TextExtraLarge` `TextLarge` `Text` `TextSmall` `TextExtraSmall` `TextDimmed`
- **Spacer**
- **Span**
- **TextArea**
- ✅ **Wrapper:** `AppWrapper` `PageWrapper`

