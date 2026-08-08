# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.js >> home page >> "Explore More" under services goes to the services page
- Location: e2e/home.spec.js:33:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Explore More' }).first()
    - locator resolved to <a href="/service" class="btn btn-primary py-3 px-4">Explore More</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
    - generic [ref=e30]:
      - heading "Bringing the harmony of nature to your doorstep." [level=1] [ref=e36]
      - heading "Transforming spaces, one bloom at a time." [level=1] [ref=e42]
    - button "Previous" [ref=e43] [cursor=pointer]
    - button "Next" [ref=e46] [cursor=pointer]
  - generic [ref=e51]:
    - generic [ref=e54]:
      - generic [ref=e55]: 
      - generic [ref=e57]:
        - heading "No Hidden Cost" [level=4] [ref=e58]
        - text: Transparency is our commitment.
    - generic [ref=e61]:
      - generic [ref=e62]: 
      - generic [ref=e64]:
        - heading "Dedicated Team" [level=4] [ref=e65]
        - text: A collective force committed to turning ideas into reality.
    - generic [ref=e68]:
      - generic [ref=e69]: 
      - generic [ref=e71]:
        - heading "Support Services" [level=4] [ref=e72]
        - text: Empowering progress, ensuring customer delight.
  - generic [ref=e74]:
    - generic [ref=e75]:
      - paragraph [ref=e76]: Proud Partnership
      - heading "Featured on the Etihad Rail Project" [level=1] [ref=e77]
    - generic [ref=e78]:
      - generic [ref=e79]:
        - generic [ref=e80]:
          - link "Blossom Flowers Landscaping - Etihad Rail Project partnership":
            - /url: /project
            - img "Blossom Flowers Landscaping - Etihad Rail Project partnership" [ref=e81] [cursor=pointer]
        - generic [ref=e82]:
          - link "Blossom Flowers Landscaping - Etihad Rail Project partnership":
            - /url: /project
            - img "Blossom Flowers Landscaping - Etihad Rail Project partnership" [ref=e83] [cursor=pointer]
      - button "Previous" [ref=e84] [cursor=pointer]
      - button "Next" [ref=e87] [cursor=pointer]
  - generic [ref=e94]:
    - paragraph [ref=e95]: Since
    - heading "2019" [level=1] [ref=e96]
    - heading "Transforming nature into art." [level=1] [ref=e97]
    - paragraph [ref=e98]: Boldly sculpting the Earth's embrace, our landscapes echo the poetry of creation, a testament to the grandeur of nature's collaboration with artistry. We don't just shape landscapes; we compose love letters to the earth, etching stories that withstand the test of time.
  - generic [ref=e101]:
    - generic [ref=e102]:
      - heading "0" [level=1] [ref=e103]
      - text: Projects Executed
    - generic [ref=e104]:
      - heading "0" [level=1] [ref=e105]
      - text: Organization Members
    - generic [ref=e106]:
      - heading "0" [level=1] [ref=e107]
      - text: Machinery and Equipments
  - generic [ref=e110]:
    - generic [ref=e111]:
      - paragraph [ref=e112]: Why Choosing Us!
      - heading "Few Reasons Why People Choosing Us!" [level=1] [ref=e113]
      - paragraph [ref=e114]: Blossom Flowers Landscaping stands out for its turnkey landscaping solutions, driven by a team of seasoned construction professionals with extensive field experience. With a commitment to quality from conception to completion, the company ensures timely project delivery and client satisfaction. Specializing in diverse disciplines such as Hard & Soft Landscaping, Irrigation Design & Execution, Swimming Pool & Water features, Pergolas & Shade Structures, and Landscape Lighting Works, Blossom Flowers Landscaping offers comprehensive services. Their expertise, track record in prestigious UAE projects, and dedication to continuous improvement make them a compelling choice for landscaping needs, promising a mutually beneficial and enduring partnership.
    - generic [ref=e116]:
      - generic [ref=e118]:
        - generic [ref=e120]:
          - generic [ref=e121]: 
          - heading "Excellence guaranteed" [level=4] [ref=e123]
        - generic [ref=e125]:
          - generic [ref=e126]: 
          - heading "Customer-focused" [level=4] [ref=e128]
      - generic [ref=e130]:
        - generic [ref=e131]: 
        - heading "Personal Protective Equipment (PPE)" [level=4] [ref=e133]
  - generic [ref=e135]:
    - generic [ref=e136]:
      - paragraph [ref=e137]: Our Services
      - heading "Services That We Offer You" [level=1] [ref=e138]
    - generic [ref=e139]:
      - generic [ref=e143]:
        - img "Icon" [ref=e145]
        - heading "Hard & Soft Landscaping" [level=4] [ref=e146]
        - paragraph [ref=e147]: Our Company brings your outdoor dreams to life with both the structural beauty of hardscaping and the vibrant life of softscaping.
      - generic [ref=e151]:
        - img "Icon" [ref=e153]
        - heading "Irrigation Design and Execution" [level=4] [ref=e154]
        - paragraph [ref=e155]: From planning sprinklers to seeing them flourish,We deliver expert irrigation design and flawless execution for your landscape's perfect drink.
      - generic [ref=e159]:
        - img "Icon" [ref=e161]
        - heading "Swimming Pool and Water features" [level=4] [ref=e162]
        - paragraph [ref=e163]: Installation of stunning swimming pools and captivating water features, transforming your backyard into an aquatic oasis.
    - link "Explore More" [ref=e165] [cursor=pointer]:
      - /url: /service
  - generic [ref=e167]:
    - generic [ref=e168]:
      - paragraph [ref=e169]: Our Products
      - heading "Projects that we completed" [level=1] [ref=e170]
    - generic [ref=e172]:
      - generic [ref=e173]:
        - generic [ref=e174]:
          - generic [ref=e176]:
            - generic [ref=e178]:
              - heading "Project Name" [level=4] [ref=e179]
              - heading "SUPPLY AND INSTALLATION OF SOFT LANDSCAPING" [level=3] [ref=e180]
              - heading "Client" [level=4] [ref=e181]
              - heading "UAE BIOTECH RESEARCH AL WATHBA" [level=3] [ref=e182]
            - generic [ref=e183]:
              - heading "Cost" [level=4] [ref=e184]
              - heading "AED 0.48 Million" [level=3] [ref=e185]
          - generic [ref=e187]:
            - generic [ref=e189]:
              - heading "Project Name" [level=4] [ref=e190]
              - heading "YAS MALL" [level=3] [ref=e191]
              - heading "Client" [level=4] [ref=e192]
              - heading "ALDAR PROPERTIES(PJSC)" [level=3] [ref=e193]
            - generic [ref=e194]:
              - heading "Cost" [level=4] [ref=e195]
              - heading "AED 0.2 Million" [level=3] [ref=e196]
              - heading "Contracter" [level=4] [ref=e197]
              - heading "HILALCO" [level=3] [ref=e198]
        - button "" [ref=e199] [cursor=pointer]
        - button "" [ref=e201] [cursor=pointer]
      - link "Explore More" [ref=e204] [cursor=pointer]:
        - /url: /project
  - generic [ref=e207]:
    - generic [ref=e208]:
      - heading "Services" [level=4] [ref=e209]
      - paragraph [ref=e210] [cursor=pointer]: Hard & Soft Landscaping
      - paragraph [ref=e211] [cursor=pointer]: Irrigation Design and Execution
      - paragraph [ref=e212] [cursor=pointer]: Swimming Pool & Water features
      - paragraph [ref=e213] [cursor=pointer]: Pergolas & Shade Structures
      - paragraph [ref=e214] [cursor=pointer]: Lighting Works
    - generic [ref=e215]:
      - heading "Quick Links" [level=4] [ref=e216]
      - link "About Blossom" [ref=e217] [cursor=pointer]:
        - /url: /about
      - link "Contact Us" [ref=e218] [cursor=pointer]:
        - /url: /contact
      - link "Our Services" [ref=e219] [cursor=pointer]:
        - /url: /service
      - link "Accreditation" [ref=e220] [cursor=pointer]:
        - /url: /accreditation
      - link "Our Projects" [ref=e221] [cursor=pointer]:
        - /url: /project
    - generic [ref=e222]:
      - heading "Our Office" [level=4] [ref=e223]
      - paragraph [ref=e224]:
        - generic [ref=e225]: 
        - generic [ref=e226]: Al firdous tower,
        - generic [ref=e227]: 15 th floor,
        - generic [ref=e228]: same building of km trading,
        - text: Office no 38,39
      - paragraph [ref=e229]:
        - generic [ref=e230]: 
        - text: 02-6737119
      - paragraph [ref=e231]:
        - generic [ref=e232]: 
        - text: 050-4470135
      - paragraph [ref=e233]:
        - generic [ref=e234]: 
        - text: 050-4470125
      - paragraph [ref=e235]:
        - generic [ref=e236]: 
        - text: 050-4470695
      - paragraph [ref=e237]:
        - generic [ref=e238]: 
        - text: info@blossomlandscaping.ae
  - generic [ref=e241]:
    - generic [ref=e242]:
      - text: ©
      - link "Blossom" [ref=e243] [cursor=pointer]:
        - /url: "#"
      - text: ", All Right Reserved."
    - generic [ref=e244]: We bring Nature close to you
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
  19 |     await carousel.locator('.carousel-control-prev').click();
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
> 34 |     await page.getByRole('link', { name: 'Explore More' }).first().click();
     |                                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
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