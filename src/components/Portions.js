import Graph from './Graph'

function Portions({ portions, categories}) {
  return (
    <>
      {categories.map((category, index) => (
        <div>
          <Graph key={category.id} num={category.num} cat={category.name} portions={portions}/>
        </div>
      ))}
    </>
  )
}

export default Portions