import {useTranslations} from 'next-intl'
export default function Something() {
  const t = useTranslations('app/(public)/somethingpublic')

  return <div>{t('something')}</div>
}
