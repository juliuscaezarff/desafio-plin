import { schemaForm } from '@/components/FormPage/schema'
import { AddressProps, FormProps } from '@/components/FormPage/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

function zipCodeMask(zipCode: string) {
  return zipCode
  .replace(/\D/g, '')
  .replace(/^(\d{5})(\d{3})?$/, '$1-$2')
}

export const useCep = () => {
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

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue('address.city', data.localidade)
      setValue('address.street', data.logradouro)
      setValue('address.state', data.uf)
      setValue('address.district', data.bairro)
      setValue('address.complement', data.complemento)
    },
    [setValue]
  )

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      )

      handleSetData(data)
    },
    [handleSetData]
  )

  useEffect(() => {
    setValue('address.zipCode', zipCodeMask(zipCode))

    if (zipCode.length !== 9) return

    handleFetchAddress(zipCode)
  }, [handleFetchAddress, zipCode, setValue])

  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit
  }
}
