// Assets
import logo from 'assets/images/logo.svg'

// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'
import Pulse from 'components/Loaders/Pulse'

const AppLoader = () => {
  return (
    <section className={css.appLoader}>
      <div className={css.wrapper}>
        <h1 className={css.h1}>
          Project Main Heading
        </h1>

        <Image src={logo.src} alt="Logo " />

        <p className={css.intro}>
          <span className={css.greeting}>Seja Bem Vindo!</span>
          Estamos buscando as melhores ofertas para você!
        </p>
        <div className={css.pulseWrapper}>
          <Pulse />
        </div>
      </div>
    </section>
  )
}

export default AppLoader
