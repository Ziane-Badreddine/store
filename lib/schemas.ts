import * as z from "zod"

export const checkoutFormSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }).max(14),

  // Shipping Address
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  apartment: z.string().optional(),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  zip: z.string().min(5, { message: "Please enter a valid postal code" }),

  // Payment Information
  paymentMethod: z.enum(["creditCard", "paypal"]),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, { message: "Card number must be 16 digits" })
    .optional()
    .or(z.literal("")),
  expiryMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, { message: "Enter a valid month (01-12)" })
    .optional()
    .or(z.literal("")),
  expiryYear: z
    .string()
    .regex(/^\d{2}$/, { message: "Enter a valid 2-digit year" })
    .optional()
    .or(z.literal("")),
  cvc: z
    .string()
    .regex(/^\d{3,4}$/, { message: "CVC must be 3 or 4 digits" })
    .optional()
    .or(z.literal("")),
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>

