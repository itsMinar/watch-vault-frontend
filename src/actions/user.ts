'use server';

import {
  LoginFormData,
  LoginUserSchema,
  RegisterUserSchema,
  RegistrationFormData,
} from '@/schemas';

export async function registerUserAction(formData: RegistrationFormData) {
  try {
    const result = RegisterUserSchema.safeParse(formData);

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors };
    }

    console.log(result.data);

    return { success: true, message: 'Watched Movie added successfully!' };
  } catch (error) {
    console.log('🚀 ~ registerUserAction ~ error:', error);

    return { success: false, message: 'Something went wrong!' };
  }
}

export async function loginUserAction(formData: LoginFormData) {
  try {
    const result = LoginUserSchema.safeParse(formData);

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors };
    }

    console.log(result.data);

    return { success: true, message: 'Watched Movie added successfully!' };
  } catch (error) {
    console.log('🚀 ~ loginUserAction ~ error:', error);
    return { success: false, message: 'Something went wrong!' };
  }
}
