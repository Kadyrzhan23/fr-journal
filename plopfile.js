export default function (plop) {
    plop.setGenerator("component", {
        description: "Create React TS component",

        prompts: [
            {
                type: "input",
                name: "name",
                message: "Component name:"
            }
        ],

        actions: [
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
                templateFile: "plop-templates/component.hbs"
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
                templateFile: "plop-templates/style.hbs"
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/index.ts",
                templateFile: "plop-templates/index.hbs"
            }
        ]
    });
}