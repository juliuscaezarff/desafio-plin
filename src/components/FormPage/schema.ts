import { z } from 'zod'

export const schemaForm = z
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
