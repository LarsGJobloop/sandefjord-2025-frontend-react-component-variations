export function ComponentWithChildren(properties) {
  console.log(properties)

  return (
    <ul>
      {properties.children}
    </ul>
  )
}