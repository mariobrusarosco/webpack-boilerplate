// Vendors
import { Link } from 'react-router-dom'
import { pathOr, length } from 'ramda'
import { useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

// Utils
import paginate from 'utils/paginate'

// Styles
import css from './styles.scss'

// Components
import ItemsList from 'components/ItemsList'
import GoBack from 'components/GoBack'

const Member = ({ match }) => {
  // Redux / Store
  const ID = pathOr('', ['params', 'id'], match)
  // const allPhotos = useSelector(({ example }) => example[ID] || null)
  const allPhotos = useSelector(({ example }) => example)

  // State
  // const [paginatedPhotos, setPaginatedPhotos] = useState(
  //   () => allPhotos && paginate({ array: allPhotos, perPage: 20 })
  // )
  // // const [paginatedPhotos, setPaginatedPhotos] = useState([])
  const [currentPage, setPage] = useState(1)

  // LifeCycle
  useEffect(() => {
    console.log('useEffect() on Member')

    // setPaginatedPhotos(paginate({ array: allPhotos, perPage: 20 }))
  }, [])

  // Props
  // const photosToBeShown = paginatedPhotos[currentPage]
  const photosToBeShown = allPhotos
  console.log({ photosToBeShown })

  // Methods
  const changePage = targetPage => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.dispatchEvent(new Event('resetImagesOnDOM'))

    setPage(targetPage)
  }

  // Internal Components
  const Paginator = () => (
    <div className={css.paginationArea}>
      <Pagination
        onChange={changePage}
        current={currentPage}
        defaultCurrent={0}
        total={length(allPhotos)}
        defaultPageSize={20}
      />
    </div>
  )

  // console.log('render() on Member', photosToBeShown)

  return (
    <div className={css.page}>
      Member {ID}
      {/* <Paginator /> */}
      <ItemsList items={photosToBeShown} />
      {/* <Paginator /> */}
      <GoBack />
    </div>
  )
}

export default Member
