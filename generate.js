const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf8');

// Find the boundaries of the header and footer
const headerEndIdx = indexContent.indexOf('<!-- Hero Section -->');
const footerStartIdx = indexContent.indexOf('<!-- Footer -->');

if (headerEndIdx === -1 || footerStartIdx === -1) {
    console.error('Could not find header or footer markers.');
    process.exit(1);
}

const header = indexContent.substring(0, headerEndIdx);
let footer = indexContent.substring(footerStartIdx);

// Add data.js to the scripts
footer = footer.replace('<script src="main.js"></script>', '<script src="data.js"></script>\n    <script src="main.js"></script>');

const dynamicSection = `
    <!-- Internal Hero Banner -->
    <section class="internal-hero" id="dynamic-hero" style="background: linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.8)), url('./assets/images/hero-bg.png') center/cover; padding: 6rem 5%; text-align: center; color: white;">
        <div class="internal-hero-content">
            <h1 id="dynamic-title" style="font-family: 'Playfair Display', serif; font-size: 3rem; margin: 0;">Loading...</h1>
        </div>
    </section>

    <!-- Page Content Area -->
    <section class="page-content section-padding" id="dynamic-content" style="min-height: 400px; padding: 4rem 5%;">
        <div class="container">
            <div class="loader" style="text-align: center; padding: 4rem;">Loading Content...</div>
        </div>
    </section>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const urlParams = new URLSearchParams(window.location.search);
            const pageId = urlParams.get("id");
            
            const heroEl = document.getElementById("dynamic-hero");
            const titleEl = document.getElementById("dynamic-title");
            const contentEl = document.getElementById("dynamic-content");
            
            if (pageId && typeof siteData !== 'undefined') {
                const data = siteData[pageId] || siteData["default"];
                
                // Set Title (Fallback if generic)
                if (!siteData[pageId]) {
                    titleEl.textContent = typeof formatTitleFromId === 'function' ? formatTitleFromId(pageId) : "Information Coming Soon";
                } else {
                    titleEl.textContent = data.title;
                }
                
                // Set Image
                if (data.heroImage) {
                    heroEl.style.backgroundImage = \`linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.8)), url(\${data.heroImage})\`;
                }
                
                // Set Content
                contentEl.innerHTML = \`<div class="container" style="max-width: 800px; margin: 0 auto; line-height: 1.8;">\${data.content || siteData["default"].content}</div>\`;
            } else {
                // No ID provided, go home or show default
                window.location.href = "index.html";
            }
        });
    </script>
`;

const pageHtml = header + dynamicSection + footer;

fs.writeFileSync('page.html', pageHtml);
console.log('page.html created successfully.');
