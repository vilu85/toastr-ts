# Toastr-TS Demo

This directory contains the demo page for Toastr-TS, deployed via GitHub Pages.

## 🚀 Deployment

The demo is automatically deployed to GitHub Pages via GitHub Actions.

**Setup (one-time):**
1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under "Source", select: **GitHub Actions**
4. The workflow in `.github/workflows/deploy-pages.yml` will handle the rest

**Automatic deployment:**
- Every push to `master` branch triggers a deployment
- The workflow builds the library and copies `dist/toastr.umd.js` into `docs/dist/`
- Demo is available at: `https://vilu85.github.io/toastr-ts/`

**Manual deployment:**
- Go to **Actions** tab in your repository
- Select "Deploy Demo to GitHub Pages"
- Click "Run workflow"

## 📝 Local Development

To test the demo page locally:

1. Build the library and prepare docs:
   ```bash
   npm run build
   
   # Copy built files to docs for local testing
   mkdir -p docs/dist
   cp dist/toastr.umd.js docs/dist/
   ```

2. Open `docs/index.html` in your browser, or use a local server:
   ```bash
   # Using Node.js http-server
   npx http-server docs
   
   # Using Python
   cd docs && python -m http.server 8000
   
   # Or just open the file directly
   open docs/index.html  # macOS
   start docs/index.html # Windows
   ```

3. If using a local server, navigate to `http://localhost:8080/`

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
