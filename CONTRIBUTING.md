# Contributing to SaaS Dashboard

Thank you for your interest in contributing to this project! Here are some guidelines to help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/saas-dashboard-react.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow the existing file structure
- Use CSS modules for styling
- Add proper TypeScript types (if converting to TS)
- Write meaningful commit messages

### Component Structure
```
src/components/
├── ComponentName/
│   ├── ComponentName.js
│   ├── ComponentName.css
│   └── index.js (optional)
```

### Naming Conventions
- Components: PascalCase (`MyComponent`)
- Files: PascalCase for components (`MyComponent.js`)
- CSS classes: kebab-case (`.my-component`)
- Variables: camelCase (`myVariable`)

## Submitting Changes

1. Make your changes
2. Test thoroughly
3. Update documentation if needed
4. Commit with a clear message
5. Push to your fork
6. Create a Pull Request

## Pull Request Guidelines

- Provide a clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Update README if needed
- Reference any related issues

## Reporting Issues

When reporting issues, please include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Feel free to open an issue for any questions or suggestions!