import {useTranslations} from 'next-intl'
;('use client')

import {signIn} from 'next-auth/react'

export default function SignIn() {
  const t = useTranslations('app/(public)/_components')

  return <button onClick={() => signIn()}>{t('sign-in')}</button>
}
