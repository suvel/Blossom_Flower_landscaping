# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.js >> home page >> hero carousel controls change the visible slide
- Location: e2e/home.spec.js:8:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#header-carousel').locator('.carousel-control-prev')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]: 
      - generic [ref=e8]: 02-6737119
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11]: 
        - generic [ref=e12]: info@blossomlandscaping.ae
      - link "Chat on WhatsApp" [ref=e14] [cursor=pointer]:
        - /url: https://wa.me/026737119
        - generic [ref=e15]: 
        - text: contact us on whatsapp
  - navigation [ref=e16]:
    - link [ref=e17] [cursor=pointer]:
      - /url: /
      - img "Blossom Flowers Landscaping logo" [ref=e18]
    - generic [ref=e20]:
      - link "Home" [ref=e21] [cursor=pointer]:
        - /url: /
      - link "About" [ref=e22] [cursor=pointer]:
        - /url: /about
      - link "Services" [ref=e23] [cursor=pointer]:
        - /url: /service
      - link "Accreditation" [ref=e24] [cursor=pointer]:
        - /url: /accreditation
      - link "Projects" [ref=e25] [cursor=pointer]:
        - /url: /project
      - link "Contact" [ref=e26] [cursor=pointer]:
        - /url: /contact
      - link "Protfolio" [ref=e27] [cursor=pointer]:
        - /url: /asserts/pdf/Blossom-portfolio.pdf
      - text: 
  - generic [ref=e29]:
    - heading "Transforming spaces, one bloom at a time." [level=1] [ref=e36]
    - button "Previous" [ref=e37] [cursor=pointer]
    - button "Next" [active] [ref=e40] [cursor=pointer]
  - generic [ref=e45]:
    - generic [ref=e48]:
      - generic [ref=e49]: 
      - generic [ref=e51]:
        - heading "No Hidden Cost" [level=4] [ref=e52]
        - text: Transparency is our commitment.
    - generic [ref=e55]:
      - generic [ref=e56]: 
      - generic [ref=e58]:
        - heading "Dedicated Team" [level=4] [ref=e59]
        - text: A collective force committed to turning ideas into reality.
    - generic [ref=e62]:
      - generic [ref=e63]: 
      - generic [ref=e65]:
        - heading "Support Services" [level=4] [ref=e66]
        - text: Empowering progress, ensuring customer delight.
  - generic [ref=e68]:
    - generic [ref=e69]:
      - paragraph [ref=e70]: Proud Partnership
      - heading "Featured on the Etihad Rail Project" [level=1] [ref=e71]
    - generic [ref=e72]:
      - generic [ref=e74]:
        - link "Blossom Flowers Landscaping - Etihad Rail Project partnership":
          - /url: /project
          - img "Blossom Flowers Landscaping - Etihad Rail Project partnership" [ref=e75] [cursor=pointer]
      - button "Previous" [ref=e76] [cursor=pointer]
      - button "Next" [ref=e79] [cursor=pointer]
  - generic [ref=e86]:
    - paragraph [ref=e87]: Since
    - heading "2019" [level=1] [ref=e88]
    - heading "Transforming nature into art." [level=1] [ref=e89]
    - paragraph [ref=e90]: Boldly sculpting the Earth's embrace, our landscapes echo the poetry of creation, a testament to the grandeur of nature's collaboration with artistry. We don't just shape landscapes; we compose love letters to the earth, etching stories that withstand the test of time.
  - generic [ref=e93]:
    - generic [ref=e94]:
      - heading "0" [level=1] [ref=e95]
      - text: Projects Executed
    - generic [ref=e96]:
      - heading "0" [level=1] [ref=e97]
      - text: Organization Members
    - generic [ref=e98]:
      - heading "0" [level=1] [ref=e99]
      - text: Machinery and Equipments
  - generic [ref=e102]:
    - generic [ref=e103]:
      - paragraph [ref=e104]: Why Choosing Us!
      - heading "Few Reasons Why People Choosing Us!" [level=1] [ref=e105]
      - paragraph [ref=e106]: Blossom Flowers Landscaping stands out for its turnkey landscaping solutions, driven by a team of seasoned construction professionals with extensive field experience. With a commitment to quality from conception to completion, the company ensures timely project delivery and client satisfaction. Specializing in diverse disciplines such as Hard & Soft Landscaping, Irrigation Design & Execution, Swimming Pool & Water features, Pergolas & Shade Structures, and Landscape Lighting Works, Blossom Flowers Landscaping offers comprehensive services. Their expertise, track record in prestigious UAE projects, and dedication to continuous improvement make them a compelling choice for landscaping needs, promising a mutually beneficial and enduring partnership.
    - generic [ref=e108]:
      - generic [ref=e110]:
        - generic [ref=e112]:
          - generic [ref=e113]: 
          - heading "Excellence guaranteed" [level=4] [ref=e115]
        - generic [ref=e117]:
          - generic [ref=e118]: 
          - heading "Customer-focused" [level=4] [ref=e120]
      - generic [ref=e122]:
        - generic [ref=e123]: 
        - heading "Personal Protective Equipment (PPE)" [level=4] [ref=e125]
  - generic [ref=e127]:
    - generic [ref=e128]:
      - paragraph [ref=e129]: Our Services
      - heading "Services That We Offer You" [level=1] [ref=e130]
    - generic [ref=e131]:
      - generic [ref=e135]:
        - img "Icon" [ref=e137]
        - heading "Hard & Soft Landscaping" [level=4] [ref=e138]
        - paragraph [ref=e139]: Our Company brings your outdoor dreams to life with both the structural beauty of hardscaping and the vibrant life of softscaping.
      - generic [ref=e143]:
        - img "Icon" [ref=e145]
        - heading "Irrigation Design and Execution" [level=4] [ref=e146]
        - paragraph [ref=e147]: From planning sprinklers to seeing them flourish,We deliver expert irrigation design and flawless execution for your landscape's perfect drink.
      - generic [ref=e151]:
        - img "Icon" [ref=e153]
        - heading "Swimming Pool and Water features" [level=4] [ref=e154]
        - paragraph [ref=e155]: Installation of stunning swimming pools and captivating water features, transforming your backyard into an aquatic oasis.
    - link "Explore More" [ref=e157] [cursor=pointer]:
      - /url: /service
  - generic [ref=e159]:
    - generic [ref=e160]:
      - paragraph [ref=e161]: Our Products
      - heading "Projects that we completed" [level=1] [ref=e162]
    - generic [ref=e164]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - generic [ref=e168]:
            - generic [ref=e170]:
              - heading "Project Name" [level=4] [ref=e171]
              - heading "YAS MALL" [level=3] [ref=e172]
              - heading "Client" [level=4] [ref=e173]
              - heading "ALDAR PROPERTIES(PJSC)" [level=3] [ref=e174]
            - generic [ref=e175]:
              - heading "Cost" [level=4] [ref=e176]
              - heading "AED 0.2 Million" [level=3] [ref=e177]
              - heading "Contracter" [level=4] [ref=e178]
              - heading "HILALCO" [level=3] [ref=e179]
          - generic [ref=e181]:
            - generic [ref=e183]:
              - heading "Project Name" [level=4] [ref=e184]
              - heading "DESIGN AND BUILD NEW BOUNDARY WALL AT AL BATEEN EXECUTIVE AIRPORT" [level=3] [ref=e185]
              - heading "Client" [level=4] [ref=e186]
              - heading "AL BATEEN AIRPORT" [level=3] [ref=e187]
            - generic [ref=e188]:
              - heading "Cost" [level=4] [ref=e189]
              - heading "AED 1.1 Million" [level=3] [ref=e190]
              - heading "Contracter" [level=4] [ref=e191]
              - heading "HILALCO" [level=3] [ref=e192]
        - button "" [ref=e193] [cursor=pointer]
        - button "" [ref=e195] [cursor=pointer]
      - link "Explore More" [ref=e198] [cursor=pointer]:
        - /url: /project
  - generic [ref=e201]:
    - generic [ref=e202]:
      - heading "Services" [level=4] [ref=e203]
      - paragraph [ref=e204] [cursor=pointer]: Hard & Soft Landscaping
      - paragraph [ref=e205] [cursor=pointer]: Irrigation Design and Execution
      - paragraph [ref=e206] [cursor=pointer]: Swimming Pool & Water features
      - paragraph [ref=e207] [cursor=pointer]: Pergolas & Shade Structures
      - paragraph [ref=e208] [cursor=pointer]: Lighting Works
    - generic [ref=e209]:
      - heading "Quick Links" [level=4] [ref=e210]
      - link "About Blossom" [ref=e211] [cursor=pointer]:
        - /url: /about
      - link "Contact Us" [ref=e212] [cursor=pointer]:
        - /url: /contact
      - link "Our Services" [ref=e213] [cursor=pointer]:
        - /url: /service
      - link "Accreditation" [ref=e214] [cursor=pointer]:
        - /url: /accreditation
      - link "Our Projects" [ref=e215] [cursor=pointer]:
        - /url: /project
    - generic [ref=e216]:
      - heading "Our Office" [level=4] [ref=e217]
      - paragraph [ref=e218]:
        - generic [ref=e219]: 
        - generic [ref=e220]: Al firdous tower,
        - generic [ref=e221]: 15 th floor,
        - generic [ref=e222]: same building of km trading,
        - text: Office no 38,39
      - paragraph [ref=e223]:
        - generic [ref=e224]: 
        - text: 02-6737119
      - paragraph [ref=e225]:
        - generic [ref=e226]: 
        - text: 050-4470135
      - paragraph [ref=e227]:
        - generic [ref=e228]: 
        - text: 050-4470125
      - paragraph [ref=e229]:
        - generic [ref=e230]: 
        - text: 050-4470695
      - paragraph [ref=e231]:
        - generic [ref=e232]: 
        - text: info@blossomlandscaping.ae
  - generic [ref=e235]:
    - generic [ref=e236]:
      - text: ©
      - link "Blossom" [ref=e237] [cursor=pointer]:
        - /url: "#"
      - text: ", All Right Reserved."
    - generic [ref=e238]: We bring Nature close to you
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('home page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   });
  7  | 
  8  |   test('hero carousel controls change the visible slide', async ({ page }) => {
  9  |     const carousel = page.locator('#header-carousel');
  10 |     await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
  11 |       /bringing the harmony of nature to your doorstep/i,
  12 |     );
  13 | 
  14 |     await carousel.locator('.carousel-control-next').click();
  15 |     await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
  16 |       /transforming spaces, one bloom at a time/i,
  17 |     );
  18 | 
> 19 |     await carousel.locator('.carousel-control-prev').click();
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |     await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
  21 |       /bringing the harmony of nature to your doorstep/i,
  22 |     );
  23 |   });
  24 | 
  25 |   test('facts counters animate up to their final values', async ({ page }) => {
  26 |     const facts = page.locator('.facts h1.display-4');
  27 |     await facts.first().scrollIntoViewIfNeeded();
  28 |     await expect(facts.nth(0)).toHaveText('38', { timeout: 10000 });
  29 |     await expect(facts.nth(1)).toHaveText('52', { timeout: 10000 });
  30 |     await expect(facts.nth(2)).toHaveText('26', { timeout: 10000 });
  31 |   });
  32 | 
  33 |   test('"Explore More" under services goes to the services page', async ({ page }) => {
  34 |     await page.getByRole('link', { name: 'Explore More' }).first().click();
  35 |     await expect(page).toHaveURL('/service');
  36 |   });
  37 | 
  38 |   test('"Explore More" under projects goes to the projects page', async ({ page }) => {
  39 |     await page.getByRole('link', { name: 'Explore More' }).nth(1).click();
  40 |     await expect(page).toHaveURL('/project');
  41 |   });
  42 | });
  43 | 
```