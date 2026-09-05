# HealthLayer AI

HealthLayer is a privacy-first preventive health workspace for India and emerging markets. This repository currently contains **Phase 1 only**: the responsive product foundation, dashboard shell, and onboarding experience.

The product uses careful language around health information. It is a preventive companion and navigation layer, not a diagnostic tool or a replacement for professional care.

## Phase 1 scope

- Responsive patient dashboard shell
- Mobile navigation and desktop sidebar
- Health overview signals with non-diagnostic wording
- Two-minute check-in entry point
- Four-step baseline onboarding flow
- Profile progress and next-step plan
- Privacy and safety cues in the primary experience
- Accessible icon buttons, responsive layouts, and reduced-motion support

Clinical rules, AI providers, authentication, persistence, report uploads, sensors, referrals, and provider dashboards are intentionally deferred to later phases.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Verification

```bash
npm run lint
npm run build
```

## Architecture direction

The current frontend is a Next.js App Router application using TypeScript, Tailwind CSS, and Lucide icons. Future work should organize features under `src/features/`, keep clinical logic outside UI components, and introduce a FastAPI/PostgreSQL backend behind typed API contracts.

The intended implementation order is:

1. Foundation and user persistence
2. Health baseline, measurements, timeline, and deterministic risk rules
3. AI service abstraction with safety validation
4. Reports, referrals, and healthcare navigation
5. Family permissions and provider workflows

Synthetic/demo data must be clearly labeled, and no simulated measurement should be presented as coming from a real device.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
