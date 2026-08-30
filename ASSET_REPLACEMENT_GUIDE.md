# Kinly CarePro — Product Asset & Screenshot Replacement Guide

This guide explains how to capture, format, and replace the placeholder/mockup images in the Kinly CarePro marketing website with live product screenshots from your staging or production application.

---

## 1. Asset Directory & Location

All product imagery and screenshots are stored in:
```
/src/assets/
```

---

## 2. Master Image Inventory & Specifications

| Target File Name | Component Usage | Recommended Dimensions | Aspect Ratio | Screen Content to Capture |
| :--- | :--- | :--- | :--- | :--- |
| **`home_page_dashboard.png`** | [Hero.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Hero.jsx), [ExperienceShowcase.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/ExperienceShowcase.jsx) | **1920 × 1080 px** (or 2560 × 1440 px @2x) | 16:9 | **Executive Command Center Dashboard:** Showing participant summary cards, active shifts, revenue metrics, and Guardian compliance status badge. |
| **`mobile_app_kinly.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 3) | **1920 × 1080 px** | 16:9 | **Native Mobile Caregiver App:** One-tap GPS Check-In screen showing geofence green accuracy circle, shift address, and 14+ structured activity buttons. |
| **`mobile_app.png`** | [ExperienceShowcase.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/ExperienceShowcase.jsx) | **750 × 1334 px** | 9:16 (Phone) | **Mobile Shift Execution View:** Support worker logging shift progress notes, task checklists, and incident drafts. |
| **`roster_kinlycare.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 4) | **1920 × 1080 px** | 16:9 | **Smart Rostering & Timeline Canvas:** Interactive scheduler showing week view, color-coded staff shifts, and Copy-Week Wizard modal. |
| **`billing_kinly.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 1) | **1920 × 1080 px** | 16:9 | **Deterministic Billing Run Summary:** Table showing rate segmentation (Day/Evening/Night/Sat/Sun), travel claim lines, and 1-click NDIA Bulk CSV export button. |
| **`reports_kinlycare.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 8) | **1920 × 1080 px** | 16:9 | **17+ Operational Reports Hub:** Suite breakdown showing Shift Operations, Billing, Payroll, and Compliance report export cards with PDF/Excel buttons. |
| **`payroll_kinly.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 5) | **1920 × 1080 px** | 16:9 | **Time & Attendance to Payroll Engine:** 3-Tier Rate Matrix, Punctuality Badges, ATO Travel Allowances, and 1-Click Xero/MYOB exports. |
| **`compliance_kinly.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 6) | **1920 × 1080 px** | 16:9 | **Staff Compliance & Screening:** 3-Tier Worker Screening, Expiry Alerts, and Automated Roster Locks. |
| **`security_kinly.png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 9) | **1920 × 1080 px** | 16:9 | **Data Isolation & Custom Branding:** Multi-tenant database isolation, Custom Subdomain SSL, Branding control, and RBAC matrix. |
| **`Guardian_ai..png`** | [Features.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Features.jsx) (Pillar 2) | **1920 × 1080 px** | 16:9 | **Guardian AI Note Assistant:** Interface displaying original frontline note, 0–100 quality score, clinical rewrite suggestions, and staff review approval. |
| **`KinlyCarePro_logo.png`** | [Navbar.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Navbar.jsx), [Footer.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Footer.jsx) | **600 × 180 px** (Transparent PNG / SVG) | ~3:1 (Wide) | **Official Kinly CarePro Logo** with clear transparent background. |

---

## 3. Best Practices for Capturing Production Screenshots

To maintain high visual quality:

1. **Use Realistic & Diverse Test Data:**
   - Use Australian participant names (e.g. *James Morrison*, *Maya Chen*).
   - Use valid PAPL 2025–26 item codes (e.g. `01_011_0107_1_1 Assistance With Self-Care`).
   - Populate realistic dollar amounts, hours (e.g. *38.5 hrs*), and Australian addresses (e.g. *Kialla VIC*, *Melbourne*).
   - Never use placeholder text like "Lorem Ipsum" or fake garbled strings.
2. **Resolution & Scaling:**
   - Capture desktop screenshots on a Retina or 1080p display at standard **100% browser zoom**.
   - Clean up browser toolbars, bookmark bars, and developer tools before capturing.
3. **Format & Compression:**
   - Save screenshots as **PNG** or **WebP**.
   - Run images through an optimizer (like TinyPNG, Squoosh, or ImageOptim) to keep file sizes under **300 KB** for fast load times.

---

## 4. How to Replace an Image in Code

Replacing an image is as simple as overwriting the file in `src/assets/` with the exact same filename.

If you wish to use a new filename, update the import line in the corresponding component:

### Example: Updating the Hero Dashboard Screenshot
1. Place your new screenshot in `src/assets/hero_dashboard_v2.png`.
2. Open [src/components/Hero.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Hero.jsx).
3. Update line 5:
```diff
- import dashboardImage from '../assets/hero_dashboard.png';
+ import dashboardImage from '../assets/hero_dashboard_v2.png';
```
4. Save the file. Vite's hot-reload will instantly reflect the new screenshot.

---

## 5. Built-in Dynamic UI Mockup Fallbacks

For any features where you do not yet have a physical image, the website includes **built-in high-fidelity UI components** (rendered with Tailwind CSS and Lucide icons). These mockups automatically adapt to mobile, tablet, and desktop screens with crisp typography and zero image pixelation.
