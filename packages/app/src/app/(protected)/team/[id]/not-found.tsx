import {getTranslations} from 'next-intl/server'
import Link from 'next/link'

export default async function NotFound() {
  const t = await getTranslations('app/(protected)/team/[id]')

  return (
    <div>
      <h2>{t('team-not-found')}</h2>
      <p>{t('team-request-not-found')}</p>
      <p>
        {t('view-home-link', {
          component0: <Link href="/">{t('view-home-link_component0')}</Link>,
        })}
      </p>
    </div>
  )
}
