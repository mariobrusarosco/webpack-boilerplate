// CONSTANTS
const { E2E, BUSINESS } = APP || global.APP
const { ZAP_PAGE } = E2E
const { ZAP } = BUSINESS

// Vendors
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

// Components
import PropertyList from 'components/PropertyList'
import Image from 'components/Image'

// Assets
import logoZap from 'assets/images/logo-zap.png'

// Styles
import css from './styles.scss'

const Zap = () => {
  // States / Store selectors and dispatchers
  const zapProperties = useSelector(({ Properties }) => pathOr([], [ZAP], Properties))
  const [currentPage, setPage] = useState(1)

  const totalOfProperties = pathOr(0, ['all', 'length'], zapProperties)
  const propertiesToRender = pathOr([], ['pagination', [currentPage]], zapProperties)

  const changePage = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // This scroll action would be an 'util'
    setPage(page)
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
    <section className={css.zapPage} data-id={ZAP_PAGE}>
      <div className={css.wrapper}>
        <Image src={logoZap.src} alt="Logo Zap" />
        <Paginator />
        <PropertyList properties={propertiesToRender} />
        <Paginator />
      </div>
    </section>
  )
}

export default Zap
