export const SITE_NAME = 'Real_Roem Creator Portfolio'
export const CREATOR_HANDLE = '@Roem'
export const CREATOR_NAME = 'Real_Roem'
export const DEFAULT_SPONSORSHIP_EMAIL = 'sponsor@realroem.com'
/* v8 ignore next */
const configuredSponsorshipEmail = import.meta.env.VITE_SPONSORSHIP_EMAIL
export const SPONSORSHIP_EMAIL =
  configuredSponsorshipEmail && !configuredSponsorshipEmail.includes('example.com')
    ? configuredSponsorshipEmail
    : DEFAULT_SPONSORSHIP_EMAIL
export const DISCORD_URL = 'https://discord.gg/Nve7ZWSNAz'
/* v8 ignore next */
export const YOUTUBE_URL = import.meta.env.VITE_YOUTUBE_URL ?? 'https://www.youtube.com/@Roem'
export const MAILTO_SPONSORSHIP_URL = `mailto:${SPONSORSHIP_EMAIL}?subject=Roem%20Sponsorship%20Inquiry`
export const YOUTUBE_CHANNEL_ID = 'UCY0HP5PO3Dg3YY4Hkb-sVuA'
