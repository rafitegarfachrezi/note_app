export function passwordValidator(password) {
  if (!password) return "Password tidak boleh kosong"
  if (password.length < 5) return 'Password harus terdiri dari 5 huruf atau  lebih'
  return ''
}
