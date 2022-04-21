import Portion from './Portion'
import AddButton from './AddButton'

function Graph({ num, cat, portions, onAdd }) {
  let graph = []
  for (let i = 0; i < num; i++) {
    graph.push(i)
  }
  const result = portions.filter((portion) => portion.category == cat)

  return (
    <div className='graph'>
      <h2 className='graph-heading'>{cat[0].toUpperCase() + cat.substring(1)}</h2>
      {graph.map((i) => (
        <Portion key={`${cat}_${i}`} className={`${cat} ${i < result.length ? 'complete' : ''}`}/>
      ))}
      <AddButton cat={cat} onAdd={onAdd}/>
    </div>
  )
}

export default Graph