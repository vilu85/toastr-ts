# Toastr-TS Demo

This directory contains the demo page for Toastr-TS, deployed via GitHub Pages.

## 🚀 Deployment

To deploy to GitHub Pages:

1. Push this directory to your repository
2. Go to your repository settings on GitHub
3. Navigate to **Pages** section
4. Under "Source", select:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/docs`
5. Click **Save**

GitHub will automatically deploy your demo page to:
`https://vilu85.github.io/toastr-ts/`

## 📝 Local Development

To test the demo page locally:

1. Make sure you've built the library:
   ```bash
   npm run build
   ```

2. Open `docs/index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000/docs/`

## 🔧 Updating the Demo

The demo page automatically loads the UMD build from `../dist/toastr.umd.js`.

After making changes to the library:
1. Run `npm run build`
2. Test the demo page
3. Commit both the source changes and updated `dist/` files
4. Push to GitHub - the demo will update automatically

## 📦 CDN Links

Once published to npm, users can access the library via CDN:
- jsDelivr: `https://cdn.jsdelivr.net/npm/toastr-ts/dist/toastr.umd.js`
- unpkg: `https://unpkg.com/toastr-ts/dist/toastr.umd.js`
