function AddButton({ cat, onAdd }) {
  
  const onClick = () => {
    onAdd({ category: cat} )
  }

  return (
    <button onClick={onClick}>+</button>
  )
}

export default AddButton