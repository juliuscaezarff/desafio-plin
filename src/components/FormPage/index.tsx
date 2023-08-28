'use client'

import { useCep } from '@/hooks/useCep'

import Image from 'next/image'

export function FormPage() {
  const { errors, register, handleFormSubmit, handleSubmit } = useCep()

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen">
      <div className="lg:w-4/5 h-[890px] lg:h-[80vh] flex flex-col lg:flex-row shadow-xl shadow-zinc-400 rounded-xl items-center">
        <div className="flex flex-col items-center justify-center bg-white p-4 w-1/2">
          <Image
            src={'/image-form-page.svg'}
            alt="imagem"
            width={496}
            height={703}
            className="lg:w-[50%] lg:max-h-[50%]"
          />
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/2 lg:mt-[-110px]">
          <form
            action=""
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col w-[360px] h-[550px] items-center gap-4 "
          >
            <div>
              <h1 className='text-3xl font-semibold text-violet-600'>Preecnhe seu CEP</h1>
            </div>

            <div>
              <input
                {...register('address.zipCode')}
                type="text"
                placeholder="CEP"
                maxLength={9}
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.zipCode?.message && (
                <p className="text-red-500">
                  {errors.address?.zipCode?.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register('address.street')}
                type="text"
                placeholder="Rua"
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.street?.message && (
                <p className="text-red-500">{errors.address?.street?.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('address.number')}
                type="text"
                placeholder="Número"
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.number?.message && (
                <p className="text-red-500">{errors.address?.number?.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('address.district')}
                type="text"
                placeholder="Bairro"
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.district?.message && (
                <p className="text-red-500">{errors.address?.district?.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('address.complement')}
                type="text"
                placeholder="Complemento"
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.complement?.message && (
                <p className="text-red-500">{errors.address?.complement?.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('address.city')}
                type="text"
                placeholder="Cidade"
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.city?.message && (
                <p className="text-red-500">{errors.address?.city?.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('address.state')}
                type="text"
                placeholder="Estado"
                className="w-[340px] h-10 p-2 rounded-lg ring-1 ring-gray-300 py-2 outline-none focus:ring-2 focus:ring-violet-400 mt-2"
              />
              {errors.address?.state?.message && (
                <p className="text-red-500">{errors.address?.zipCode?.message}</p>
              )}
            </div>

            <button
                type="submit"
                className="inline-block self-end bg-violet-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-violet-500"
              >
                Enviar
              </button>
          </form>
        </div>
      </div>
    </section>
  )
}
