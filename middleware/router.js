export default ({ route, store, redirect }) => {
  const { path } = route
  if (path === '/sys/role') {
    redirect('/403')
  }
}
