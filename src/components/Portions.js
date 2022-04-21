import Graph from './Graph'

function Portions({ portions, categories, onAdd}) {
  return (
    <>
      {categories.map((category, index) => (
        <div>
          <Graph key={category.id} num={category.num} cat={category.name} portions={portions} onAdd={onAdd} />
        </div>
      ))}
    </>
  )
}

export default Portions