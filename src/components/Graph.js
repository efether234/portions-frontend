import Portion from './Portion'

function Graph({ num, cat }) {
  let graph = []
  for (let i = 0; i < num; i++) {
    graph.push(i)
  }

  return (
    <div className='graph'>
      <h2 className='graph-heading'>{cat[0].toUpperCase() + cat.substring(1)}</h2>
      {graph.map((i) => (
        <Portion key={`${cat}_${i}`} className={cat}/>
      ))}
      <button>+</button>
    </div>
  )
}

export default Graph