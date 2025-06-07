import {useTranslations} from 'next-intl'
export default function WorkspacePage() {
  const t = useTranslations('app/(protected)/workspace/[id]')

  return <div>{t('workspace')}</div>
}
