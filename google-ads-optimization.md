# 🎯 Google Ads Optimization Guide - Taniya Spa Mahipalpur

## Complete Setup Instructions for Maximum ROI

---

## 📋 Table of Contents
1. [Google Analytics Setup](#1-google-analytics-setup)
2. [Google Ads Account Creation](#2-google-ads-account-creation)
3. [Conversion Tracking](#3-conversion-tracking)
4. [Campaign Strategy](#4-campaign-strategy)
5. [Keywords & Ad Copy](#5-keywords--ad-copy)
6. [Budget & Bidding](#6-budget--bidding)
7. [Daily Monitoring](#7-daily-monitoring)

---

## 1. Google Analytics Setup ✅

### Step 1: Create Google Analytics Account
1. Go to **analytics.google.com**
2. Click **Sign Up**
3. Account name: `Taniya Spa Mahipalpur`
4. Select all options

### Step 2: Create Property
1. Property name: `Taniya Spa Website`
2. Reporting timezone: **India Standard Time (IST)**
3. Currency: **Indian Rupee (INR)**

### Step 3: Create Data Stream
1. Select **Web**
2. Website URL: `https://aaynarussians.github.io/Taniya-spa-mahipalpur/`
3. Stream name: `Main Website`

### Step 4: Get Measurement ID
- Copy: `G-XXXXXXXXXX` (Your Measurement ID)
- Update in `index.html` line 12

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
```

---

## 2. Google Ads Account Creation ✅

### Step 1: Create Google Ads Account
1. Go to **ads.google.com**
2. Sign in with same Google account
3. Click **Start Now**

### Step 2: Business Setup
- **Company Name:** Taniya Spa Mahipalpur
- **Website:** `https://aaynarussians.github.io/Taniya-spa-mahipalpur/`
- **Main Phone:** +91-7042206572
- **Location:** New Delhi, India

### Step 3: Billing Setup
1. Click **Billing** (left menu)
2. Add payment method (Credit/Debit Card)
3. Set billing country: **India**
4. Set daily budget: ₹2,000-5,000

### Step 4: Get Conversion ID
- Navigate to **Tools** → **Conversions**
- Note your **Conversion ID** (AW-XXXXXXXXXX)
- Update in `script.js` line 9

```javascript
const conversionId = 'AW-YOUR-ID'; // Replace
```

---

## 3. Conversion Tracking ✅

### Step 1: Create Conversion Actions

#### Phone Call Conversion
1. Go to **Tools** → **Conversions**
2. Click **+ Conversion**
3. **Conversion name:** Phone Call
4. **Conversion type:** Phone call
5. **Value:** ₹800 (average booking value)
6. **Count:** Every
7. Copy conversion label

#### Form Submission Conversion
1. **Conversion name:** Booking Form
2. **Conversion type:** Lead
3. **Value:** ₹500
4. **Count:** Every

#### Website Purchase Conversion
1. **Conversion name:** Booking Completed
2. **Conversion type:** Purchase
3. **Value:** ₹3,500 (average package)
4. **Count:** Every

### Step 2: Add Conversion Tracking Code
- Update `script.js` with your conversion labels
- Verify tracking in **Google Tag Assistant** browser extension

### Step 3: Test Conversion
1. Open your website
2. Click phone number
3. Check **Tools** → **Conversions** → **Conversion Actions**
4. Should show "Recording conversions"

---

## 4. Campaign Strategy 🎯

### Campaign Type 1: Search Ads (Best ROI)
**Recommended for:** Local searches, high intent customers

**Campaign Settings:**
- **Campaign type:** Search
- **Campaign name:** `Russian Massage Mahipalpur - Search`
- **Location:** Delhi - Radius 25 km (Mahipalpur center)
- **Bidding:** Target CPA ₹500

### Campaign Type 2: Display Ads
**Recommended for:** Brand awareness, retargeting

**Campaign Settings:**
- **Campaign type:** Display
- **Campaign name:** `Taniya Spa - Display Remarketing`
- **Audience:** Website visitors
- **Bidding:** CPM ₹100-150

### Campaign Type 3: Local Services Ads (Google Guaranty)
**Recommended for:** Phone calls, direct leads

**Campaign Settings:**
- **Campaign type:** Local Services
- **Service:** Massage Services
- **Service area:** Mahipalpur, Aerocity, IGI Airport
- **Lead rating:** ⭐⭐⭐⭐⭐

### Campaign Type 4: YouTube Ads (Brand Building)
**Recommended for:** Video testimonials, before-after

**Campaign Settings:**
- **Campaign type:** YouTube
- **Ads format:** Bumper ads (6 seconds)
- **Budget:** ₹1,000/day
- **Target:** Relaxation, wellness, spa

---

## 5. Keywords & Ad Copy 🔑

### High-Converting Keywords

#### Primary Keywords (Exact Match)
```
"Russian massage mahipalpur"
"Russian spa near me"
"Massage center aerocity"
"Deep tissue massage delhi"
"Aroma therapy delhi"
"Spa near IGI airport"
```

#### Secondary Keywords (Phrase Match)
```
"massage services mahipalpur"
"spa packages delhi"
"full body massage delhi"
"relaxation massage therapy"
"wellness spa near me"
```

#### Long-Tail Keywords (Low CPC, High Intent)
```
"best massage place in mahipalpur"
"professional russian massage delhi"
"affordable spa packages near airport"
"body massage with steam bath"
"aroma therapy massage mahipalpur"
```

### Ad Copy Template 1 (Premium Service)
**Headline 1:** Russian Massage in Mahipalpur
**Headline 2:** Best Rated Spa - 4.8/5 Stars
**Headline 3:** Book Now - ₹1,500 Onwards

**Description 1:** Professional Russian massage therapy by certified therapists. Full body massage, aroma therapy & deep tissue treatments available.

**Description 2:** Open 10 AM - 10 PM | Call +91-7042206572 | Premium facilities with steam & shower included.

### Ad Copy Template 2 (Offer-Based)
**Headline 1:** Limited Time Offer - 30% Off!
**Headline 2:** Russian Spa in Mahipalpur
**Headline 3:** First Booking - Special Price

**Description 1:** Book your spa package today and get 30% discount. Authentic Russian massage from certified professionals.

**Description 2:** Call now: +91-7042206572 | Limited offer - valid till end of month!

### Ad Copy Template 3 (Local)
**Headline 1:** Best Massage Near IGI Airport
**Headline 2:** Spa in Aerocity Delhi
**Headline 3:** Open Today 10 AM - 10 PM

**Description 1:** Conveniently located near IGI Airport & Aerocity. Walk-in welcome or book online.

**Description 2:** Premium facility with professional staff | +91-7042206572

---

## 6. Budget & Bidding 💰

### Recommended Budget Allocation

| Period | Daily Budget | Monthly Cost | Expected Revenue |
|--------|-------------|-------------|-----------------|
| Week 1 | ₹2,000 | ₹14,000 | ₹15,000-25,000 |
| Week 2-4 | ₹4,000 | ₹56,000 | ₹60,000-120,000 |
| Month 2+ | ₹8,000 | ₹112,000 | ₹150,000-300,000 |

### Bidding Strategy

**Search Ads:**
- **Bidding Type:** Target CPA
- **Target CPA:** ₹500-800 (Cost Per Acquisition)
- **Max CPC:** ₹200

**Display Ads:**
- **Bidding Type:** CPM (Cost Per 1000 Impressions)
- **Target CPM:** ₹100-150

**YouTube Ads:**
- **Bidding Type:** CPV (Cost Per View)
- **Max CPV:** ₹3-5

### CPA Calculation
```
CPA = Total Ad Spend / Conversions
Example: ₹4,000 / 5 bookings = ₹800 CPA

Target Profit:
Average booking: ₹3,500
CPA: ₹800
Profit per booking: ₹2,700 (77% profit margin)
```

---

## 7. Daily Monitoring ✅

### Daily Checklist (5 minutes)

- [ ] Check **Dashboard** for clicks & impressions
- [ ] Check **Conversion** count for phone calls & forms
- [ ] Check **Cost** - compare with budget
- [ ] Check **Quality Score** - aim for 8+
- [ ] Monitor CTR (Click-Through Rate) - target 5%+

### Weekly Review (30 minutes)

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| **CTR** | 5-8% | Improve ad copy |
| **Conv. Rate** | 2-5% | Improve landing page |
| **CPA** | ₹500-800 | Increase bid for good keywords |
| **Quality Score** | 7-10 | Improve landing page experience |
| **Impressions** | 5,000+ | Increase daily budget |

### Monthly Optimization

1. **Keyword Analysis**
   - Which keywords convert best?
   - Pause low-performing keywords
   - Add negative keywords

2. **Ad Testing**
   - A/B test ad copy
   - Test different headlines
   - Keep winning ads, pause losers

3. **Landing Page**
   - Analyze bounce rate
   - Improve page speed
   - Add social proof (testimonials)

4. **Budget Adjustment**
   - Scale up winners (increase budget)
   - Pause losers (pause campaigns)
   - Test new keywords

---

## 📊 Expected Performance Metrics

### Month 1 (Testing Phase)
- **Impressions:** 15,000
- **Clicks:** 500-600
- **CTR:** 3-4%
- **Conversions:** 25-30
- **CPA:** ₹600
- **Revenue:** ₹75,000-100,000

### Month 2 (Optimization Phase)
- **Impressions:** 35,000
- **Clicks:** 1,200-1,500
- **CTR:** 4-5%
- **Conversions:** 60-80
- **CPA:** ₹500
- **Revenue:** ₹180,000-280,000

### Month 3+ (Scale Phase)
- **Impressions:** 60,000+
- **Clicks:** 2,500-3,000
- **CTR:** 5%+
- **Conversions:** 120-150
- **CPA:** ₹400-500
- **Revenue:** ₹350,000-500,000+

---

## ⚠️ Important Tips

### Do's ✅
- ✅ Start with small budget & scale gradually
- ✅ Use exact match keywords initially
- ✅ Create multiple ad variations
- ✅ Target specific geographic area
- ✅ Include phone number in ads
- ✅ Use extensions (call, location, site link)
- ✅ Track conversions accurately
- ✅ A/B test regularly

### Don'ts ❌
- ❌ Don't bid on competitor names
- ❌ Don't use misleading ads
- ❌ Don't ignore quality score
- ❌ Don't skip conversion tracking
- ❌ Don't set it and forget it
- ❌ Don't target too broad area
- ❌ Don't use generic keywords
- ❌ Don't overspend without ROI

---

## 🎓 Learn More

- **Google Ads Help:** support.google.com/google-ads
- **Analytics Guide:** support.google.com/analytics
- **Conversion Tracking:** support.google.com/google-ads/answer/3103387
- **Quality Score:** support.google.com/google-ads/answer/6167118

---

## 📞 Support

**Website:** https://aaynarussians.github.io/Taniya-spa-mahipalpur/
**Phone:** +91-7042206572
**Email:** info.spyadavw@gmail.com
**Location:** Mahipalpur, New Delhi

---

**Last Updated:** 2026-05-07
**Version:** 1.0