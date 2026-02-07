// SEO Schema Validation Script
// Run this in browser console on production to verify structured data

(function validateSEO() {
  console.log('%c🔍 TruCare SEO Validation Tool', 'font-size: 16px; font-weight: bold; color: #0F4C5C;');
  console.log('=====================================\n');

  // 1. Check Title Tag
  const title = document.title;
  console.log(`📌 Title Tag: "${title}"`);
  console.log(`   Length: ${title.length} chars ${title.length <= 60 ? '✅' : '❌ Too long!'}`);

  // 2. Check Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const descContent = metaDesc.content;
    console.log(`\n📝 Meta Description: "${descContent}"`);
    console.log(`   Length: ${descContent.length} chars ${descContent.length >= 150 && descContent.length <= 160 ? '✅' : '⚠️ Optimize length (150-160)'}`);
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
  
  console.log('\n📱 Open Graph Tags:');
  console.log(`   og:title: ${ogTitle ? '✅' : '❌'}`);
  console.log(`   og:description: ${ogDesc ? '✅' : '❌'}`);
  console.log(`   og:image: ${ogImage ? '✅' : '❌'}`);

  // 5. Check Twitter Card
  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  console.log(`\n🐦 Twitter Card: ${twitterCard ? '✅' : '❌'}`);

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
      console.log(`   Block ${i + 1}: @type = "${data['@type']}" ✅`);
      
      // Validate SoftwareApplication schema
      if (data['@type'] === 'SoftwareApplication') {
        console.log(`      - name: ${data.name ? '✅' : '❌'}`);
        console.log(`      - applicationCategory: ${data.applicationCategory ? '✅' : '❌'}`);
        console.log(`      - aggregateRating: ${data.aggregateRating ? '✅' : '❌'}`);
        console.log(`      - offers: ${data.offers ? '✅' : '❌'}`);
      }
    } catch (e) {
      console.log(`   Block ${i + 1}: ❌ Invalid JSON`);
    }
  });

  // 8. Check Image Alt Tags
  const images = document.querySelectorAll('img');
  const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');
  console.log(`\n🖼️  Images: ${images.length} total, ${imagesWithoutAlt.length} missing alt text ${imagesWithoutAlt.length === 0 ? '✅' : '⚠️'}`);

  // 9. Check Internal Links
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="http://localhost"], a[href^="https://trucare"]');
  console.log(`\n🔗 Internal Links: ${internalLinks.length} found ✅`);

  // 10. Mobile Viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  console.log(`\n📱 Mobile Viewport: ${viewport ? '✅' : '❌'}`);

  // 11. Language Tag
  const htmlLang = document.documentElement.lang;
  console.log(`\n🌏 Language Tag: ${htmlLang || 'Not set'} ${htmlLang === 'en-AU' ? '✅' : '⚠️ Should be en-AU'}`);

  // 12. Performance Hints
  console.log('\n⚡ Performance Quick Check:');
  console.log(`   Page load: ${(performance.timing.loadEventEnd - performance.timing.navigationStart) / 1000}s`);
  
  // Summary
  console.log('\n=====================================');
  console.log('%c✅ SEO Validation Complete!', 'font-size: 14px; font-weight: bold; color: #2ab36d;');
  console.log('\nNext Steps:');
  console.log('1. Test with Google Rich Results: https://search.google.com/test/rich-results');
  console.log('2. Validate sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html');
  console.log('3. Check mobile-friendliness: https://search.google.com/test/mobile-friendly');
  console.log('4. PageSpeed Insights: https://pagespeed.web.dev/');
})();
