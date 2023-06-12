export default function ({ $auth, redirect }) {
  if ($auth.loggedIn && !$auth.user.user.is_admin) redirect('/')
}