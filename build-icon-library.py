import os

def kebab_case_to_pascal_case(name):
    # Split the name by dashes and capitalize each part, then join them back together
    return ''.join(word.title() for word in name.split('-'))

def generate_index_tsx():
    # The directory of the script being run is the base directory for relative paths
    icons_path = './src/Icons/library'
    index_tsx_path = './src/Icons/index.tsx'

    icon_files = [f for f in os.listdir(icons_path) if f.endswith('.svg')]
    icon_components = []

    for filename in icon_files:
        # Extract the base name without extension
        name_without_ext = os.path.splitext(filename)[0]
        component_name = f'{kebab_case_to_pascal_case(name_without_ext)}'
        import_path = f'./library/{filename}'
        icon_components.append((component_name, import_path))

    # Write the imports and component exports to the index.tsx file
    with open(index_tsx_path, 'w') as f:
        # Import statement for styled-components
        f.write('import styled from \'styled-components\';\n\n')
        # Dynamic imports for each SVG
        for component_name, import_path in icon_components:
            f.write(f'import {{ ReactComponent as {component_name} }} from \'{import_path}\';\n')
        
        # Adding space between imports and component definitions
        f.write('\ninterface IconProps {\n  size?: string;\n}\n\n')
        
        # Export each icon as a styled-component
        for component_name, _ in icon_components:
            f.write(
                f'export const Ico{component_name} = styled({component_name})<IconProps>`\n'
                '  width: ${(props) => props.size || \'24px\'};\n'
                '  height: ${(props) => props.size || \'24px\'};\n'
                '`;\n\n'
            )

if __name__ == '__main__':
    generate_index_tsx()
