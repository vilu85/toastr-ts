# toastr-ts
[![Build release](https://github.com/vilu85/toastr-ts/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/vilu85/toastr-ts/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/toastr-ts.svg)](https://www.npmjs.com/package/toastr-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern TypeScript implementation of Toastr - Beautiful toast notifications for web applications, without jQuery.

**[📖 View Live Demo](https://vilu85.github.io/toastr-ts/)** | **[📦 npm Package](https://www.npmjs.com/package/toastr-ts)**

## ✨ Features

- 🎯 **Zero Dependencies** - No jQuery or other runtime dependencies required
- 📦 **Tiny Bundle** - ~90KB minified (includes styles)
- 🎨 **Styles Bundled** - CSS automatically injected, no separate import needed
- ⚡ **Framework Agnostic** - Works with React, Vue, Angular, vanilla JS, or any framework
- 🌐 **Multiple Builds** - Both UMD (script tag) and ESM (import) builds included
- 💪 **TypeScript** - Full TypeScript support with type definitions
- 📱 **Responsive** - Looks great on mobile and desktop
- ♿ **Accessible** - Proper ARIA attributes for screen readers
- 🎨 **Customizable** - Extensive options for styling and behavior

## 🚀 Quick Start

### Installation

```bash
npm install toastr-ts
```

### Usage

**ES Modules (React, Vue, etc.)**
```typescript
import Toastr from 'toastr-ts';

const toastr = new Toastr();

toastr.success('Operation successful!');
toastr.error('Something went wrong!');
toastr.info('Here is some info');
toastr.warning('Be careful!');
```

**Script Tag (CDN)**
```html
<script src="https://unpkg.com/toastr-ts/dist/toastr.umd.js"></script>
<script>
  const toastr = new window.toastr();
  toastr.success('It works!');
</script>
```

**React Example**
```typescript
import { useState } from 'react';
import Toastr from 'toastr-ts';

function MyComponent() {
  const [toastr] = useState(() => new Toastr());
  
  const handleClick = () => {
    toastr.success('Action completed!');
  };
  
  return <button onClick={handleClick}>Show Toast</button>;
}
```

## 📖 Documentation

For full documentation and interactive examples, visit the **[Live Demo](https://vilu85.github.io/toastr-ts/)**