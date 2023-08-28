'use client'

import { useCep } from '@/hooks/useCep'

export function FormPage() {
  const { errors, register, handleFormSubmit, handleSubmit } = useCep()

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

        <input 
          {...register('address.street')} 
          type="text" 
          placeholder="Rua" 
        />
        {errors.address?.street?.message && (
          <p>{errors.address?.street?.message}</p>
        )}

        <input
          {...register('address.number')}
          type="text"
          placeholder="Número"
        />
        {errors.address?.number?.message && (
          <p>{errors.address?.number?.message}</p>
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

        <input 
          {...register('address.city')} 
          type="text" 
          placeholder="Cidade" 
        />
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
