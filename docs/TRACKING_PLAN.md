# Tracking Plan

## Google Analytics (GA4)

**Status:** Placeholder — add GA4 measurement ID to `layout.tsx` when ready.

No GA4 tag is active in the current build. To enable, insert the GA4 snippet or `@next/third-parties` Google Analytics component in `src/app/layout.tsx` with the assigned measurement ID.

## Event Tracking Placeholders

| Event                  | Trigger              | Notes                          |
| ---------------------- | -------------------- | ------------------------------ |
| Section view           | Scroll-based         | Fire when section enters viewport |
| CTA click              | Button click         | Track all call-to-action buttons  |
| Accordion open         | Accordion toggle     | Track market detail expansions    |
| Tab switch             | Tab selection        | Track platform tab changes        |
| Reference link click   | Outbound link click  | Track clicks to external sources  |

## Form Submission Tracking

Not applicable — no forms exist in the current scope.

## Vercel Analytics

Can be enabled by installing the `@vercel/analytics` package and adding the `<Analytics />` component to `src/app/layout.tsx`.

## Conversion Goals

| Goal                        | Description                                      |
| --------------------------- | ------------------------------------------------ |
| Proposal read-through rate  | Percentage of visitors reaching the final section |
| Section engagement depth    | Average number of sections viewed per session     |
| Reference clicks            | Total outbound clicks to source material          |
