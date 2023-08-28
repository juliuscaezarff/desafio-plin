import { z } from 'zod'
import { schemaForm } from './schema'

export type FormProps = z.infer<typeof schemaForm>

export type AddressProps = {
  bairro: string,
  complemento: string,
  uf: string,
  logradouro: string,
  localidade: string,
}