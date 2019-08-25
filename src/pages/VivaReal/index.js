// CONSTANTS
const { E2E, BUSINESS } = APP || global.APP
const { VIVA_REAL_PAGE } = E2E
const { VIVA_REAL } = BUSINESS

// Vendors
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

// Components
import PropertyList from 'components/PropertyList'
import Image from 'components/Image'

// Assets
import logoViva from 'assets/images/logo.svg'

// Styles
import css from './styles.scss'

const VivaReal = () => {
  // States / Store selectors and dispatchers
  const vivaProperties = useSelector(({ Properties }) =>
    pathOr([], [VIVA_REAL], Properties)
  )
  const [currentPage, setPage] = useState(1)

  const totalOfProperties = pathOr(0, ['all', 'length'], vivaProperties)
  const propertiesToRender = pathOr([], ['pagination', [currentPage]], vivaProperties)

  // TODO DRY in this behaviour
  const changePage = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // This scroll action would be an 'util'
    setPage(page)
    document.dispatchEvent(new Event('resetImagesOnDOM'))
  }

  const Paginator = () => {
    return (
      <div className={css.paginationArea}>
        <Pagination
          onChange={changePage}
          current={currentPage}
          defaultCurrent={0}
          total={totalOfProperties}
          defaultPageSize={20}
        />
      </div>
    )
  }

  return (
    <section className={css.vivaPage} data-id={VIVA_REAL_PAGE}>
      <div className={css.wrapper}>
        <Image src={logoViva.src} alt="Logo Viva Real" />
        <Paginator />
        <PropertyList properties={propertiesToRender} />
        <Paginator />
      </div>
    </section>
  )
}

export default VivaReal
