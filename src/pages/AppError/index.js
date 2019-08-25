// Vendors
import { useSelector } from 'react-redux'

// Components
import Pulse from 'components/Loaders/Pulse'

// Styles
import css from './styles.scss'

const AppError = () => {
  // Redux / Store
  const appCriticalError = useSelector(({ app }) => app.appCriticalError)

  return (
    <section className={css.notFound}>
      <div className={css.wrapper}>
        <p className={css.ops}>Ops!!</p>
        <p className={css.description}>{appCriticalError.messageForUsers}</p>

        <div className={css.pulseWrapper}>
          <Pulse />
        </div>
      </div>
    </section>
  )
}

export default AppError
