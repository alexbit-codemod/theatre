import {useTranslations} from 'next-intl'
;('use client')

import React from 'react'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import * as schemas from 'src/schemas'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/ui/components/ui/form'
import {Input} from 'src/ui/components/ui/input'
import {Button} from 'src/ui/components/ui/button'
import {api} from '~/trpc/react'
import {useRouter} from 'next/router'

const formSchema = z.object({
  name: schemas.personLegalName,
  email: schemas.email,
})

export default function AccountSetupForm({
  name,
  email,
}: {
  name: string
  email: string
}) {
  const t = useTranslations('app/(protected)/account-setup/_components')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      email,
    },
  })

  const {mutateAsync} = api.me.update.useMutation()

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await mutateAsync({
        name: values.name,
        email: values.email,
      })

      void router.replace('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t('name-label')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>{t('name-description')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t('email-label')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>{t('email-description')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t('submit-button')}</Button>
      </form>
    </Form>
  )
}
