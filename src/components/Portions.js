import Graph from './Graph'

function Portions({ portions, categories}) {
  return (
    <>
      {categories.map((category, index) => (
        <div>
          <Graph key={category.id} num={category.num} cat={category.name}/>
        </div>
      ))}
    </>
  )
}

export default Portions