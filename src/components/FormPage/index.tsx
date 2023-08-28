'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface FormPageProps {}

const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, 'Por favor informe um CEP válido'),
      street: z.string().min(1, 'Por favor informe um rua válida'),
      number: z.string().min(1, 'Por favor informe um número válido'),
      district: z.string().min(1, 'Por favor informe um bairro'),
      complement: z.string(),
      city: z.string().min(1, 'Por favor informe uma cidade válida'),
      state: z.string().min(1, 'Por favor informe um estatdo válido')
    })
  })
  .transform(field => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.zipCode,
      number: field.address.zipCode,
      state: field.address.zipCode,
      city: field.address.zipCode,
      complement: field.address.zipCode,
      district: field.address.zipCode
    }
  }))

type FormProps = z.infer<typeof schemaForm>
type AddressProps = {
  bairro: string,
  complemento: string,
  uf: string,
  logradouro: string,
  localidade: string,
}

export function FormPage(props: FormPageProps) {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        city: '',
        complement: '',
        district: '',
        number: '',
        state: '',
        street: '',
        zipCode: ''
      }
    }
  })

  const zipCode = watch('address.zipCode')

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
  }

  const handleSetData = useCallback((data: AddressProps) => {
    setValue('address.city', data.localidade)
    setValue('address.street', data.logradouro)
    setValue('address.state', data.uf)
    setValue('address.district', data.bairro)
    setValue('address.complement', data.complemento)
  }, [setValue])

  const handleFetchAddress = useCallback(async (zipCode: string) => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`
    )

    handleSetData(data)
  }, [handleSetData])

  useEffect(() => {
    setValue('address.zipCode', zipCodeMask(zipCode))

    if (zipCode.length !== 9) return

    handleFetchAddress(zipCode)
  }, [handleFetchAddress, zipCode, setValue])

  return (
    <>
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register('address.zipCode')}
          type="text"
          placeholder="CEP"
          maxLength={9}
        />
        {errors.address?.zipCode?.message && (
          <p>{errors.address?.zipCode?.message}</p>
        )}

        <input {...register('address.street')} type="text" placeholder="Rua" />
        {errors.address?.street?.message && (
          <p>{errors.address?.street?.message}</p>
        )}

        <input
          {...register('address.district')}
          type="text"
          placeholder="Bairro"
        />
        {errors.address?.district?.message && (
          <p>{errors.address?.district?.message}</p>
        )}

        <input
          {...register('address.complement')}
          type="text"
          placeholder="Complemento"
        />
        {errors.address?.complement?.message && (
          <p>{errors.address?.complement?.message}</p>
        )}

        <input {...register('address.city')} type="text" placeholder="Cidade" />
        {errors.address?.city?.message && (
          <p>{errors.address?.city?.message}</p>
        )}

        <input
          {...register('address.state')}
          type="text"
          placeholder="Estado"
        />
        {errors.address?.state?.message && (
          <p>{errors.address?.zipCode?.message}</p>
        )}

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
function zipCodeMask(zipCode: string): string {
  throw new Error('Function not implemented.')
}

