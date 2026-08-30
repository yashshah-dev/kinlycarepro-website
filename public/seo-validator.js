// Kinly CarePro SEO & Schema Validation Tool
// Run this in browser console to verify technical SEO, metadata, and JSON-LD graph integrity

(function validateSEO() {
  console.log('%c🔍 Kinly CarePro SEO Validation Tool', 'font-size: 16px; font-weight: bold; color: #0F4C5C;');
  console.log('=====================================\n');

  // 1. Check Title Tag
  const title = document.title;
  console.log(`📌 Title Tag: "${title}"`);
  console.log(`   Length: ${title.length} chars ${title.length <= 70 ? '✅' : '❌ Too long!'}`);

  // 2. Check Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const descContent = metaDesc.content;
    console.log(`\n📝 Meta Description: "${descContent}"`);
    console.log(`   Length: ${descContent.length} chars ${descContent.length >= 130 && descContent.length <= 170 ? '✅' : '⚠️ Target 140-160 chars'}`);
  } else {
    console.log('\n❌ Meta Description: MISSING');
  }

  // 3. Check Canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    console.log(`\n🔗 Canonical URL: ${canonical.href} ✅`);
  } else {
    console.log('\n⚠️ Canonical URL: Not set');
  }

  // 4. Check Open Graph Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  
  console.log('\n📱 Open Graph Tags:');
  console.log(`   og:title: ${ogTitle ? '✅' : '❌'}`);
  console.log(`   og:description: ${ogDesc ? '✅' : '❌'}`);
  console.log(`   og:image: ${ogImage ? ogImage.content + ' ✅' : '❌'}`);
  console.log(`   og:url: ${ogUrl ? ogUrl.content + ' ✅' : '❌'}`);

  // 5. Check Twitter Card
  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  console.log(`\n🐦 Twitter Card: ${twitterCard ? twitterCard.content + ' ✅' : '❌'}`);

  // 6. Check H1 Tag
  const h1Tags = document.querySelectorAll('h1');
  console.log(`\n🏷️  H1 Tags: ${h1Tags.length} found ${h1Tags.length === 1 ? '✅' : '⚠️ Should have exactly 1'}`);
  if (h1Tags.length > 0) {
    h1Tags.forEach((h1, i) => {
      console.log(`   ${i + 1}. "${h1.textContent.trim().substring(0, 60)}..."`);
    });
  }

  // 7. Check Structured Data
  const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
  console.log(`\n📊 Structured Data (JSON-LD): ${jsonLdScripts.length} blocks found`);
  
  jsonLdScripts.forEach((script, i) => {
    try {
      const data = JSON.parse(script.textContent);
      if (data['@graph']) {
        console.log(`   Block ${i + 1}: @graph with ${data['@graph'].length} entities ✅`);
        data['@graph'].forEach(entity => {
          console.log(`      - @type: "${entity['@type']}" (ID: ${entity['@id'] || 'n/a'})`);
        });
      } else {
        console.log(`   Block ${i + 1}: @type = "${data['@type']}" ✅`);
      }
    } catch (e) {
      console.log(`   Block ${i + 1}: ❌ Invalid JSON`);
    }
  });

  // 8. Check Image Alt Tags
  const images = document.querySelectorAll('img');
  const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');
  console.log(`\n🖼️  Images: ${images.length} total, ${imagesWithoutAlt.length} missing alt text ${imagesWithoutAlt.length === 0 ? '✅' : '⚠️'}`);

  // 9. Internal Links
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="http://localhost"], a[href^="https://www.kinlycarepro.com.au"], a[href^="https://www.kinlycarepro.com"]');
  console.log(`\n🔗 Internal Links: ${internalLinks.length} found ✅`);

  // 10. Mobile Viewport & Language
  const viewport = document.querySelector('meta[name="viewport"]');
  const htmlLang = document.documentElement.lang;
  console.log(`\n📱 Mobile Viewport: ${viewport ? '✅' : '❌'}`);
  console.log(`🌏 Language Tag: ${htmlLang || 'Not set'} ${htmlLang === 'en-AU' ? '✅' : '⚠️ Target en-AU'}`);

  console.log('\n=====================================');
  console.log('%c✅ Kinly CarePro SEO Validation Complete!', 'font-size: 14px; font-weight: bold; color: #0F4C5C;');
})();
