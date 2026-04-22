# The Lindley Team — GHL Implementation Playbook
## Complete setup guide with every prompt, document, and resource

---

## SETUP ORDER (Do these in sequence — each step builds on the previous)

1. Knowledge Base (the brain)
2. Pipeline + Custom Fields + Tags (the skeleton)
3. Calendar (the booking engine)
4. Conversation AI Agent (website chat)
5. Voice AI Agent (speed-to-lead calls)
6. Workflows (automated sequences)
7. Website webhook integration
8. Past client database upload + re-engagement
9. Google Review automation
10. Test everything end-to-end

---

## STEP 1: KNOWLEDGE BASE

This is the "brain" that powers ALL your AI agents. Without it, your chatbot and voice agent make things up. With it, they answer accurately from YOUR content.

### Go to: AI Agents → Knowledge Base → Create New

**Name:** "The Lindley Team — Mortgage Knowledge"
**Description:** "Complete service information, FAQ library, neighborhood data, and compliance requirements for The Lindley Team correspondent mortgage lender in Portland, Oregon."

### Sources to add:

**Source 1: Upload as DOCX or PDF — "Services & FAQ Library"**

Create a Word doc with this content (copy/paste and save as .docx):

```
THE LINDLEY TEAM — SERVICES & FAQ LIBRARY

ABOUT US
The Lindley Team is a mother-daughter mortgage team operating as a correspondent lender under Mortgage Express (NMLS Company ID: 40831) in Portland, Oregon. Licensed in Oregon and Washington.

Bri Lindley — Senior Loan Officer, NMLS #1367416
Certified Divorce Lending Professional (CDLP)
Phone: 971-754-1771
Email: LindleyTeam@mtgxps.com
Office: 15115 SW Sequoia Parkway, Suite 100, Portland, OR 97224

Tammi Lindley — Managing Loan Officer, NMLS #114807 (largely retired)

We are a CORRESPONDENT LENDER, not a bank. This means we fund most loans in-house through our own bank — giving us more control over the process and faster closings. When a different product fits better, we can also broker through other lenders. You get the speed and control of a direct lender with the flexibility to access outside products when they benefit you.

5.0 star Google rating. Over 1,000 families helped. 30 years combined experience.

SERVICES WE OFFER

1. Purchase Loans
For buying a home — first-time buyers, move-up buyers, relocation, investment properties.
- Credit score: 580+ (FHA) or 620+ (Conventional)
- Down payment: As low as 0% (VA) or 3% (Conventional)
- We fund most loans in-house for faster closings and more control
- Timeline: Pre-approval in 24-48 hours, close in 30-45 days

2. Refinance
Replace your current mortgage with better terms — lower rate, shorter term, remove PMI.
- Credit score: 620+ (Conventional), 580+ (FHA Streamline)
- Need at least 5-20% equity depending on program
- We always do a break-even analysis first — if the math doesn't work, we tell you
- Timeline: 3-5 weeks

3. Divorce Lending (CDLP Specialist)
Bri is a Certified Divorce Lending Professional. We work with divorcing spouses, attorneys, and mediators on:
- Equity buyout analysis and refinancing
- Qualification on individual income post-divorce
- Real Property Detail Reports for attorneys
- Settlement agreement mortgage feasibility review
IMPORTANT: We recommend getting a CDLP involved BEFORE the divorce is finalized, not after.

4. FHA Loans
Government-backed loans for buyers with lower credit or limited savings.
- 3.5% down payment with 580+ credit score
- 10% down with 500-579 credit score
- Mortgage Insurance Premium (MIP) required
- Primary residence only

5. VA Loans
For active military, veterans, and eligible surviving spouses.
- Zero down payment
- No PMI ever
- Competitive rates below conventional
- Funding fee: 1.25-3.3% (waived for disabled veterans)
- Need Certificate of Eligibility (COE)

6. Jumbo Loans
For loan amounts above conforming limits.
- Typically need 700+ credit score
- 10-20% down payment
- 6-12 months reserves in liquid assets
- Common in Portland's premium neighborhoods (Pearl District, West Hills, Lake Oswego, Dunthorpe)

7. Cash-Out Refinance
Replace your mortgage with a larger one, receive the difference in cash.
- Must retain 20% equity after cash-out (conventional)
- Can borrow up to 80% of home's current value
- Closing costs 2-3%
- Used for renovations, debt consolidation, investments

8. HELOC (Home Equity Line of Credit)
A revolving credit line secured by your home.
- Only pay interest on what you draw
- Draw period typically 5-10 years
- Variable rate (some fixed-rate options available)
- Need 15-20%+ equity and 680+ credit score

9. Investment Property Loans
Financing for rental properties, flips, and multi-unit buildings.
- 15-25% down payment
- DSCR loans available (qualify on rental income, not personal income)
- Need 6 months reserves per property
- We work with first-time and experienced investors

10. Reverse Mortgage (HECM)
For homeowners 62+ to access equity without monthly payments.
- No monthly mortgage payments
- Loan repaid when homeowner sells, moves, or passes away
- HUD-approved counseling required
- Multiple payout options: lump sum, credit line, monthly payments

AREAS WE SERVE
Oregon and Washington. Primary focus: Portland metro area including all 71 Portland neighborhoods, Lake Oswego, Beaverton, Tigard, Gresham, Hillsboro, West Linn, Oregon City, Vancouver WA.

We are NOT licensed in California.

COMPLIANCE LANGUAGE (use when needed)
Not a commitment to lock or lend. Terms and restrictions apply. Not all applicants will qualify. Mortgage Express, LLC. NMLS Company ID: 40831. Licensed in OR/WA. Equal Housing Lender.

FREQUENTLY ASKED QUESTIONS

Q: How much do I need for a down payment?
A: It depends on the loan type. VA = 0%, Conventional = as low as 3%, FHA = 3.5%. Oregon also has down payment assistance programs through OHCS.

Q: What credit score do I need?
A: 580+ for FHA, 620+ for most Conventional, no VA minimum (most lenders want 580+). If your score is lower, we can discuss improvement strategies.

Q: How long does the mortgage process take?
A: Pre-approval in 24-48 hours. From contract to close, typically 30-45 days.

Q: Should I get pre-approved before house hunting?
A: Yes. Sellers and agents expect it. It also tells you what you can afford.

Q: What's the difference between a correspondent lender and a bank?
A: Banks can only offer their own products. As a correspondent lender, we fund most loans in-house through our own bank, which means faster closings and more control. When another product fits better, we can broker that too. Best of both worlds.

Q: How does divorce affect my mortgage?
A: It depends on the situation. As a CDLP, Bri specializes in navigating equity buyouts, qualification on individual income, and settlement agreement feasibility. Contact us before the decree is finalized.

Q: Can I buy if I'm self-employed?
A: Yes. We need 2 years of tax returns. We know which lenders are flexible with self-employed borrowers.

Q: What are current rates?
A: Rates change daily based on market conditions and your specific financial profile. Contact us for a personalized quote rather than relying on published averages.

BOOKING
To schedule a free 30-minute consultation with Bri:
- Call: 971-754-1771
- Text: 971-754-1771
- Online booking available

APPLICATION
To start a full mortgage application:
https://mtgxps.mymortgage-online.com/loan-app/?siteId=1878266072&lar=blindley&workFlowId=71729
```

**Source 2: Upload as CSV — "Portland Neighborhoods"**

Create a CSV with columns: neighborhood, median_price, vibe, schools, highlights, walk_score
Include the 10 neighborhoods Claude Code already wrote content for. This lets the AI agent answer "What neighborhoods should I look at with a $500k budget?" intelligently.

**Source 3: URL Crawl — Your new website**

Once thelindleyteam.com is live on the new Next.js site, add it as a URL source. GHL will crawl and index all pages.

### GHL Help Link:
https://help.gohighlevel.com/support/solutions/articles/155000006671-knowledge-base-document-rich-text-support

---

## STEP 2: PIPELINE + CUSTOM FIELDS + TAGS

### Pipeline — Use Workflow AI Builder

**Go to:** Automation → Workflows → Build using AI

**Paste this prompt:**

```
Create a pipeline called "Lindley Team — Client Journey" with these stages in order:

1. New Lead - for contacts who just came in from website, chat, or referral
2. Contacted - first human touchpoint made by Bri
3. Discovery Scheduled - calendar booking confirmed
4. Pre-Qualification - financial info reviewed
5. Application Started - borrower clicked through to submit application
6. In Processing - loan is in underwriting
7. Closed Won - loan funded, deal complete
8. Closed Lost - did not proceed, capture loss reason
9. Long-Term Nurture - not ready now, periodic follow-up

Default new contacts to stage 1. When a calendar event is created, automatically move to stage 3. When tagged "closed-won" move to stage 7. When tagged "closed-lost" move to stage 8.
```

### Custom Fields

**Go to:** Settings → Custom Fields → Create

| Field Name | Type | Options |
|---|---|---|
| Loan Type | Dropdown | Purchase, Refinance, FHA, VA, Jumbo, Cash-Out, HELOC, Investment, Reverse, Divorce |
| Loan Amount Range | Dropdown | Under $200k, $200-400k, $400-600k, $600k-1M, $1M+ |
| Credit Score Range | Dropdown | Below 580, 580-619, 620-679, 680-719, 720-759, 760+, Not Sure |
| Timeline | Dropdown | ASAP, 1-3 months, 3-6 months, Just exploring |
| Neighborhood Interest | Single Line Text | (free text) |
| Lead Source Page | Single Line Text | (auto-captured from webhook) |
| Calculator Home Price | Number | (auto-captured from calculator form) |
| Calculator Payment | Number | (auto-captured from calculator form) |

### Tags

**Go to:** Settings → Tags → Create these:

**Source tags:** `source:website`, `source:ai-chat`, `source:voice-ai`, `source:referral`, `source:past-client`, `source:google`

**Form tags:** `form:schedule-call`, `form:rate-quote`, `form:calculator`, `form:neighborhood`, `form:guide-download`, `form:divorce-consult`, `clicked-apply`

**Interest tags:** `interest:purchase`, `interest:refinance`, `interest:divorce`, `interest:fha`, `interest:va`, `interest:jumbo`, `interest:cash-out`, `interest:heloc`, `interest:investment`, `interest:reverse`

**Status tags:** `timeline:asap`, `timeline:1-3mo`, `timeline:3-6mo`, `timeline:exploring`, `nurture:long-term`, `closed-won`, `closed-lost`

**Divorce-specific:** `divorce:going-through`, `divorce:considering`, `divorce:recently-divorced`, `divorce:attorney-referral`

---

## STEP 3: CALENDAR

**Go to:** Calendars → Create Calendar

**Name:** "30-Minute Consultation with Bri"
**Duration:** 30 minutes
**Buffer between appointments:** 15 minutes
**Availability:** Set Bri's actual working hours
**Booking link:** This URL becomes what your AI agents and forms link to
**Confirmation:** Auto-send email + SMS confirmation
**Reminder:** 24 hours before (email) + 1 hour before (SMS)
**Form fields on booking page:** First Name, Last Name, Email, Phone, "What are you looking to do?" (dropdown: Buy, Refinance, Divorce/Equity, Cash-Out/HELOC, Investment, Not Sure)

**Connect to:** Google Calendar or Outlook so Bri's personal appointments also block time.

---

## STEP 4: CONVERSATION AI AGENT (Website Chat)

### Option A: Conversation AI (simpler, faster setup)

**Go to:** Settings → Conversation AI

**Bot Name:** "Bri's Assistant" (or just leave unnamed)
**Goal:** Booking (set to prioritize scheduling appointments)

**System Prompt / Instructions:**

```
You are a helpful assistant for The Lindley Team, a correspondent mortgage lender in Portland, Oregon run by Bri Lindley (Senior Loan Officer, NMLS #1367416, CDLP certified).

Your job:
1. Answer mortgage and Portland neighborhood questions using the Knowledge Base
2. Qualify the visitor (what they're looking for, timeline, general financial situation)
3. Encourage them to schedule a free 30-minute consultation with Bri
4. Collect their name, email, and phone when they show interest

Your personality:
- Friendly but direct — don't be overly formal or salesy
- Honest — if you don't know something specific (like exact rates), say "rates change daily — Bri can give you exact numbers based on your situation"
- Portland local — you know the neighborhoods and can make suggestions
- Never give specific rate quotes, loan approvals, or financial advice
- Always remind them you're an AI assistant and Bri is the human expert

When someone asks about divorce and mortgage:
- Be extra empathetic and low-pressure
- Mention that Bri is a Certified Divorce Lending Professional (CDLP)
- Suggest a confidential consultation
- Never push

Compliance: End any discussion of specific loan terms with "Not a commitment to lock or lend. Terms and restrictions apply."

Licensed in Oregon and Washington only. We are NOT licensed in California.
```

**Attach Knowledge Base:** Select "The Lindley Team — Mortgage Knowledge"
**Channels:** Enable for Web Chat (website widget)
**Auto-pilot mode:** ON (but set escalation trigger if visitor types "talk to a human" or "speak to Bri")

### Option B: Agent Studio (more powerful, multi-step)

**Go to:** AI Agents → Agent Studio → Create Agent

Use this if you want the chat agent to do more than just answer questions — like create contacts, book appointments, and route differently based on intent.

**Node 1: AI Agent — "Intake & Qualify"**
- System prompt: Same as above
- Tools: Knowledge Base Search, Web Search
- Connected KB: "The Lindley Team — Mortgage Knowledge"
- Output variables: `visitor_intent`, `visitor_name`, `visitor_email`, `visitor_phone`, `urgency_level`

**Node 2: Conditional — Route by Intent**
- If `visitor_intent` = "divorce" → Route to Divorce path
- If `urgency_level` = "high" → Route to Speed booking
- Default → Route to General booking

**Node 3a: AI Agent — "Divorce Specialist"**
- Extra-empathetic prompt, mentions CDLP specifically
- Offers confidential consultation
- Creates contact with tag `interest:divorce`

**Node 3b: AI Agent — "General Booking"**
- Offers to schedule 30-min consultation
- Creates contact with appropriate interest tag
- Provides calendar link

**Deploy:** Embed on website via the GHL chat widget code snippet

### GHL Help Links:
- Conversation AI: https://help.gohighlevel.com/support/solutions/articles/155000005263
- Agent Studio: https://help.gohighlevel.com/support/solutions/articles/155000007609-agent-studio-multi-agent-system-builder
- Agent Studio how-to: https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel

---

## STEP 5: VOICE AI AGENT (Speed-to-Lead)

This is the killer feature. When someone submits a rate quote form on your website, a Voice AI agent calls them within 30 seconds, qualifies them, and books an appointment with Bri. 78% of borrowers choose the first lender who responds — this makes you first, every time.

**Go to:** AI Agents → Voice AI → Create Agent

**Agent Name:** "Bri's AI Assistant"
**Voice:** Choose a natural female voice (test several — pick one that sounds conversational, not robotic)
**Greeting latency:** Test and confirm under 600ms

**System Prompt:**

```
You are an AI assistant calling on behalf of Bri Lindley from The Lindley Team, a correspondent mortgage lender in Portland, Oregon.

You are calling because they just submitted a request on our website. Your job:

1. Introduce yourself: "Hi, this is an assistant from The Lindley Team calling about your mortgage inquiry. Is this a good time for a quick call?"

2. If yes, qualify them with these questions:
   - "What are you looking to do — buy a home, refinance, or something else?"
   - "Do you have a general timeline in mind?"
   - "Have you been pre-approved anywhere yet?"
   - "What area of Portland are you looking at?" (if purchase)

3. Based on their answers, offer to book a 30-minute consultation with Bri:
   "Bri is our senior loan officer — she has over 15 years of experience in the Portland market. I can schedule a quick call with her to go over your specific situation. Would [suggest next available time] work for you?"

4. Book the appointment if they agree.

5. If they say it's not a good time: "No problem at all. When would be a better time for a quick 5-minute call? Or I can have Bri text you instead."

Rules:
- Never quote specific rates or approve anyone for a loan
- Be warm, conversational, and brief — this is a 2-3 minute call max
- If they ask detailed mortgage questions, say "That's a great question — Bri can give you a specific answer based on your situation during your consultation"
- If they seem annoyed or say they didn't request a call, apologize and offer to remove them
- For divorce-related inquiries, be extra sensitive and don't push for details — just offer to schedule a confidential call
- Never say you are AI unless directly asked. If asked, say "I'm an AI assistant for The Lindley Team"

Compliance: We are licensed in Oregon and Washington only.
```

**Knowledge Base:** Connect "The Lindley Team — Mortgage Knowledge"
**Calendar:** Connect "30-Minute Consultation with Bri"
**Call objectives:** Qualify + Book appointment
**Escalation trigger:** If caller says "transfer me to Bri" or "let me talk to a real person" → live transfer to 971-754-1771
**After call:** Auto-create/update CRM contact with call transcript, qualification answers, and tags

### Workflow Trigger for Voice AI:

**Go to:** Automation → Workflows → Build using AI

**Prompt:**
```
When a contact is created with tag "form:rate-quote" or when a contact is created with tag "form:schedule-call" AND custom field timeline equals "ASAP":
Wait 30 seconds, then trigger outbound Voice AI call to the contact's phone number using the "Bri's AI Assistant" voice agent.
If the call is completed and appointment is booked, move contact to pipeline stage "Discovery Scheduled" and send internal notification to Bri via SMS at 971-754-1771.
If the call is not answered, wait 2 hours and try again. After 2 failed attempts, send SMS to contact: "Hey {first_name}, this is Bri from The Lindley Team. I tried to reach you about your mortgage inquiry. Feel free to text me here or book a time at [calendar link]. — Bri"
```

### GHL Help Links:
- Voice AI setup: https://help.gohighlevel.com/support/solutions/articles/155000005265
- Knowledge Base for Voice AI: https://help.gohighlevel.com/support/solutions/articles/155000005266-knowledge-base-integration-for-voice-ai-agents

---

## STEP 6: WORKFLOWS (Automated Sequences)

Use Workflow AI Builder for all of these. Go to Automation → Workflows → Build using AI.

### Workflow 1: Speed-to-Lead (Non-Voice Fallback)

For leads that come in outside calling hours or when Voice AI can't connect.

**Prompt:**
```
When a contact is created with tag "form:rate-quote" AND the current time is outside business hours (before 8am or after 7pm Pacific):

Immediately send internal SMS notification to 971-754-1771: "New rate quote lead: {contact.first_name} {contact.last_name} — {contact.phone} — Loan type: {contact.custom.loan_type}"

Immediately send email to contact:
Subject: "Got your request, {contact.first_name}"
Body should be brief and personal from Bri, confirming she received their request and will have options within 24 hours. Include her direct phone number 971-754-1771 for texting.

Wait 2 minutes. Send SMS to contact: "Hey {contact.first_name}, it's Bri from The Lindley Team. Got your rate request — I'll have info for you by tomorrow morning. Text me here anytime if questions come up."

Wait 4 hours. If contact has not booked an appointment, send SMS: "Just following up — whenever you're ready to chat, you can grab a time here: [calendar link]"

Wait 24 hours. Send email with helpful content related to their loan type interest.

Wait 48 hours. Final SMS: "Hey {contact.first_name} — wanted to make sure my messages got through. No rush — whenever timing is right, I'm here. — Bri"

Wait 14 days. If still no engagement, add tag "nurture:long-term" and move to pipeline stage "Long-Term Nurture."

Stop this workflow if contact books appointment, replies to SMS, or is moved to any pipeline stage above "New Lead."
```

### Workflow 2: First-Time Buyer Nurture

**Prompt:**
```
When a contact is created with tag "form:guide-download" OR tag "interest:purchase" AND NOT tag "timeline:asap":

Day 0: Send email welcoming them and delivering the First-Time Buyer Guide PDF attachment. Personal tone from Bri.

Day 2: Send email titled "3 things Portland first-time buyers get wrong" covering the 20% down myth, credit score misconceptions, and rent vs buy math.

Day 5: Send SMS: "Quick tip — Oregon has down payment assistance programs most buyers never hear about. Happy to walk you through them. — Bri"

Day 8: Send email about affordability — "What can you actually afford in Portland?" Include link to mortgage calculator on website.

Day 14: Send email with a client success story / testimonial about a first-time buyer in Portland.

Day 21: Send SMS: "Hey {contact.first_name} — any questions come up? No pitch, just here if you need anything."

Day 30: Send email — clear CTA to schedule a consultation or reply with questions. If no engagement after day 30, add tag "nurture:long-term."

Stop if contact books appointment, submits application, or moves past pipeline stage 1.
```

### Workflow 3: Refinance Nurture

**Prompt:**
```
When a contact is created with tag "interest:refinance":

Day 0: Send email from Bri — honest and personal. "I'll be straight — refinancing doesn't always make sense. Let me look at your numbers before you spend any time on this."

Day 3: Send email about break-even analysis — when refinancing saves money and when it doesn't.

Day 7: Send SMS: "Hey {contact.first_name} — I ran some general scenarios at current rates. Want me to do a specific analysis for your situation? Just need your current rate and approximate balance."

Day 14: Send email about total cost of loan vs monthly payment — the question nobody asks.

Day 21: Send email with calendar link for a free refinance analysis call.

If no engagement, add tag "nurture:long-term."

Stop if contact books appointment or moves past pipeline stage 1.
```

### Workflow 4: Divorce Lending (Sensitive Cadence)

**Prompt:**
```
When a contact is created with tag "form:divorce-consult" OR tag "interest:divorce":

Day 0: Send email — warm, empathetic, brief. "I understand this is a difficult time. There's no pressure here. I just want to make sure you have the information you need to make the best decision." Explain what a CDLP does in 2-3 sentences.

Day 5: Send email about why mortgage planning matters BEFORE the divorce is finalized.

Day 12: Send email explaining how equity buyouts work — clear, educational, no sales language.

Day 21: Send short personal email with calendar link. "When you're ready, I'm here."

Day 35: Final email — "I know timelines in divorce are unpredictable. Whenever you're ready, I'm here to help."

Then add tag "nurture:long-term."

IMPORTANT: Never use urgency language, countdown timers, "don't miss out", or aggressive follow-up in any message. Longer intervals between messages. This is a sensitive life event.

If contact type is "Attorney/mediator seeking info for client" — send a different sequence focused on professional referral relationship.

Stop if contact books appointment.
```

### Workflow 5: Post-Close Re-engagement

**Prompt:**
```
When a contact is moved to pipeline stage "Closed Won":

Day 0: Create task "Send handwritten congratulations note" assigned to Bri.

Day 30: Send SMS: "Hey {contact.first_name} — how's the new place? Hope you're settling in. Let me know if anything comes up!"

Day 30: Send SMS asking for Google review: "If you had a good experience, a quick Google review helps other Portland families find us. [Google review link] No pressure at all. — Bri"

Day 90: Send email with market update for their neighborhood. Include home value trends.

Day 90: If no Google review yet, include review link as a P.S. in the market update email.

Day 180: Send email about potential next financial move — cash-out refi for renovations, HELOC, investment property. Based on their original loan type.

Day 365: Send "Happy home-iversary" email. Include soft referral ask: "Know anyone thinking about buying or selling? I'd love to help them the way I helped you."

Then repeat market update emails every 90 days indefinitely.

Every email includes a soft referral prompt. Never more than 2 review asks total (day 30 and day 90 only).

Stop only if contact unsubscribes.
```

### Workflow 6: Long-Term Nurture

**Prompt:**
```
When a contact is tagged "nurture:long-term":

Send one email per month, rotating through this content cycle:
Month 1: Portland market rate update with brief analysis
Month 2: Featured neighborhood spotlight (rotate through Portland neighborhoods)
Month 3: Client success story or testimonial
Month 4: Refinance check-in — "Have rates dropped enough to make a move?"
Month 5: Seasonal market trends and buying/selling patterns
Month 6: "Still thinking about it?" — personal note from Bri with calendar link

Then repeat the 6-month cycle.

Maximum one email per month. If contact clicks any email link, add tag "re-engaged" and send an internal notification to Bri.

Stop if contact books appointment, submits any form, or unsubscribes.
```

---

## STEP 7: WEBSITE WEBHOOK INTEGRATION

Claude Code builds the Next.js side. You build the GHL side.

### For each form on the website, create a Webhook trigger in GHL:

**Go to:** Automation → Workflows → Create Workflow → Add Trigger → Webhook

You'll get a unique webhook URL like:
`https://services.leadconnectorhq.com/hooks/xxxxxxxx`

**Create these webhook workflows (one per form):**

| Form | Webhook Name | Tags to Auto-Apply | Pipeline Stage |
|---|---|---|---|
| Schedule a Call | `wh-schedule-call` | source:website, form:schedule-call | Stage 1 |
| Rate Quote | `wh-rate-quote` | source:website, form:rate-quote | Stage 1 |
| Calculator Results | `wh-calculator` | source:website, form:calculator | Stage 1 |
| Neighborhood Inquiry | `wh-neighborhood` | source:website, form:neighborhood | Stage 1 |
| Guide Download | `wh-guide-download` | source:website, form:guide-download | Stage 1 |
| Divorce Consultation | `wh-divorce-consult` | source:website, form:divorce-consult | Stage 1 |
| Apply Now Click | `wh-apply-click` | source:website, clicked-apply | (tag only, no stage) |

**Give these webhook URLs to Claude Code** — it wires them into the Next.js `/api/lead` route and each form component.

**Add this to your Claude Code briefing:**
> Here are the GHL webhook URLs for each form. Set them as environment variables in Vercel:
> GHL_WEBHOOK_SCHEDULE=[url]
> GHL_WEBHOOK_RATE_QUOTE=[url]
> GHL_WEBHOOK_CALCULATOR=[url]
> GHL_WEBHOOK_NEIGHBORHOOD=[url]
> GHL_WEBHOOK_GUIDE=[url]
> GHL_WEBHOOK_DIVORCE=[url]
> GHL_WEBHOOK_APPLY_CLICK=[url]

---

## STEP 8: PAST CLIENT DATABASE

### Upload Strategy

Your past client database is gold for three reasons:
1. **Re-engagement** — past clients who might refinance, buy again, or refer
2. **Lookalike audiences** — upload to Facebook/Google for ad targeting
3. **Knowledge for AI** — the AI learns what types of clients you serve

### Import to GHL:

**Go to:** Contacts → Import → Upload CSV

**Required columns in your CSV:**
- First Name
- Last Name
- Email
- Phone
- Address (if available)
- Close Date (if available)
- Loan Type (if available)

**After import, bulk-tag all records:**
- Tag: `source:past-client`
- Tag: `closed-won`

**Then create a workflow:**

**Prompt for Workflow AI Builder:**
```
When contacts are bulk-tagged with "source:past-client":

Send email from Bri:
Subject: "It's been a while — how's the house?"
Body: Personal reconnection email. Mention that you're updating your systems and wanted to check in. Mention that you now offer new services including AI-powered rate monitoring and can let them know if refinancing makes sense. Include a "How's your home?" question. End with soft referral ask.

Wait 7 days. If no reply, send SMS: "Hey {contact.first_name}, it's Bri Lindley. I recently updated our systems and wanted to make sure I still have your info right. Quick question — are you still at [address if available]? Also, if you know anyone looking to buy, I'd love to help. — Bri"

Wait 14 days. Add tag "nurture:long-term" to feed into the ongoing monthly nurture cycle.

For contacts with close dates older than 2 years: also send an email about current home values and equity position — "Your home has likely appreciated. Here's what that means for your options."
```

### Retargeting / Lookalike Audiences:

Export your past client list as a CSV with email + phone. Upload to:
- **Facebook Ads Manager** → Custom Audiences → Customer List → Create Lookalike
- **Google Ads** → Audience Manager → Customer Match → Create Similar Audience

This targets people who look like your best past clients — same demographics, same neighborhoods, same financial profile.

---

## STEP 9: GOOGLE REVIEW AUTOMATION

Already built into Workflow 5 (Post-Close), but here's the standalone setup:

**Your Google Review link:**
Go to your Google Business Profile → Share review form → Copy link

Format: `https://g.page/r/[your-id]/review`

**Paste this link into:**
- Workflow 5 SMS (Day 30)
- Workflow 5 email P.S. (Day 90)
- A manual "Request Review" action you can trigger from any contact record

**Never:**
- Incentivize reviews (violates Google policy)
- Ask more than twice per client
- Ask during any negative interaction

---

## STEP 10: TEST END-TO-END

Before going live, test every path:

- [ ] Submit each form type on the website → verify contact appears in GHL with correct tags and custom fields
- [ ] Verify contact enters pipeline at Stage 1
- [ ] Verify correct workflow triggers (check workflow execution logs)
- [ ] Test Voice AI call — submit a rate quote form and verify you receive a call within 30 seconds
- [ ] Test Conversation AI chat widget on the website — ask questions, verify it uses Knowledge Base content
- [ ] Test calendar booking — book an appointment, verify confirmation email + SMS sent
- [ ] Test "Apply Now" click tracking — verify the tag is applied
- [ ] Verify Bri receives internal SMS notifications for hot leads
- [ ] Send a test email from each workflow — check deliverability, formatting, links
- [ ] Test the divorce sequence separately — verify sensitive tone, longer intervals

---

## REFERENCE LINKS

| Resource | URL |
|---|---|
| GHL Workflow AI Builder | https://help.gohighlevel.com/support/solutions/articles/155000006100-workflow-ai-builder |
| Agent Studio Setup | https://help.gohighlevel.com/support/solutions/articles/155000007609-agent-studio-multi-agent-system-builder |
| Agent Studio How-To | https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel |
| Voice AI Setup | https://help.gohighlevel.com/support/solutions/articles/155000005265 |
| Voice AI Knowledge Base | https://help.gohighlevel.com/support/solutions/articles/155000005266-knowledge-base-integration-for-voice-ai-agents |
| Knowledge Base Docs | https://help.gohighlevel.com/support/solutions/articles/155000006671-knowledge-base-document-rich-text-support |
| Knowledge Base Tables | https://help.gohighlevel.com/support/solutions/articles/155000006637-ai-agents-knowledge-base-tables |
| Conversation AI Setup | https://help.gohighlevel.com/support/solutions/articles/155000005263 |
| GHL for Mortgage Lenders | https://ghl-services-playbooks-automation-crm-marketing.ghost.io/gohighlevel-for-mortgage-lenders-automate-convert-and-scale-your-lending-business/ |
| Conversation AI Setup Guide | https://getautomized.com/gohighlevel-conversation-ai-setup/ |
| Voice AI Studio Guide | https://ghlstack.com/ghl-ai-voice-agent-studio-guide/ |
| GHL 2026 Setup Guide | https://getautomized.com/go-high-level-setup/ |

---

*This replaces the previous GHL architecture document. Push to the repo and update the docs/ folder.*
