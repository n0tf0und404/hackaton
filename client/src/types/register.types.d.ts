export type RegisterData = {
    name: string
    username: string
    description: string
    email: string
    password: string
    confirmPassword: string
}

export type RegisterValidations = {
    name?: string
    username?: string
    description?: string
    email?: string
    password?: string
    confirmPassword?: string
}