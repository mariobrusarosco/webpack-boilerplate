import css from './styles.scss'

const BattleComparasion = ({ githubUsers }) => {
  if (!githubUsers.length) return false

  const firstUser = githubUsers[0]
  const secondUser = githubUsers[1]

  let score = {
    [firstUser.name]: 0,
    [secondUser.name]: 0
  }

  const propsToCompare = ['followers', 'stars', 'repos']

  propsToCompare.forEach(propToBeCompared => {
    if (firstUser[propToBeCompared] === secondUser[propToBeCompared]) {
      // draw
      score[firstUser.name]++
      score[secondUser.name]++
    } else if (firstUser[propToBeCompared] > secondUser[propToBeCompared]) {
      score[firstUser.name]++
    } else {
      score[secondUser.name]++
    }
  })

  const result =
    score[firstUser.name] === score[secondUser.name]
      ? 'draw'
      : score[firstUser.name] > score[secondUser.name]
      ? firstUser.name
      : secondUser.name

  console.log(result)

  return (
    <div className={css.wrapper}>
      {githubUsers.map(githubUser => {
        const isWinner = result === githubUser.name ? 'winner' : ''
        const isDraw = result === 'draw' ? 'draw' : ''

        return (
          <div
            key={githubUser.name}
            className={css.card}
            data-result={isWinner || isDraw}
          >
            <img src={githubUser.photo} className={css.photo} />
            <div className={css.item}>{githubUser.name}</div>
            <div className={css.item}>Followers: {githubUser.followers}</div>
            <div className={css.item}>Repos: {githubUser.repos}</div>
            <div className={css.item}>Stars: {githubUser.stars}</div>
          </div>
        )
      })}

      {result === 'draw' ? <p>Ops!! There's a draw</p> : <p>Winner: {result}</p>}
    </div>
  )
}

export default BattleComparasion
