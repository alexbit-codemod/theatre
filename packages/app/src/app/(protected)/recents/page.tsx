import {useTranslations} from 'next-intl'
export default function Recents() {
  const t = useTranslations('app/(protected)/recents')

  return (
    <div className="w--full h-screen">
      <div className="p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4 items-center group">
            <h2 className="text-2xl font-semibold tracking-tight">
              {t('recents')}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 w-full">
          {t('under-construction-message')}
        </div>
      </div>
    </div>
  )
}
