// Vendors
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
  FadeTransition
} from 'react-transition-group'

import { memo } from 'react'

// Components
import ItemCard from 'components/ItemCard'

// Styles
import css from './styles.scss'

const ItemsList = memo(({ items }) => {
  console.log(items)

  if (!items.length) return null

  return (
    <div className={css.wrapper}>
      {/* <TransitionGroup component={null}>
        <CSSTransition
          key={Math.random()}
          in
          appear
          timeout={350}
          timeout={{
            appear: 300,
            enter: 250,
            exit: 200,
           }}
          classNames="card-motion"
        > */}
      <ul className={css.list}>
        {items.map(item => (
          <ItemCard data={item} key={item.id} />
        ))}
        >
      </ul>
      {/* </CSSTransition>
        </TransitionGroup> */}
    </div>
  )
})

export default ItemsList
