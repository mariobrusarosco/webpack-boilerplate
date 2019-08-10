// Images
import img from 'assets/images/breaking-bad.jpg'
import img_one from 'assets/images/breaking-bad-01.jpg'
import img_two from 'assets/images/breaking-bad-02.jpg'
import img_three from 'assets/images/breaking-bad-03.jpg'
import img_four from 'assets/images/breaking-bad-04.jpg'
// Styles
import css from './styles.scss'

// Components
import Img from 'components/Img'

const LazyLoad = () => {
  return (
    <div className={css.container}>
      <Img src={img} />
      <Img src={img_one} />
      <Img src={img_two} />
      <Img src={img_three} />
      <Img src={img_four} />
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQt65nH7KwpKtFEvhHDRZpJG0BzHichYbaEYen65TxgAsEKfbo" />
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsT2ih4rw4vjxoBppaMbaiYXlGszvHSMbj-h9M2PMyDlz_78R" />
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mGFs0TUiMENOAIHxZKSPZYtvPgippVSlvmr0ZBrkjrRzeJKM" />
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsT2ih4rw4vjxoBppaMbaiYXlGszvHSMbj-h9M2PMyDlz_78R" />
    </div>
  )
}

export default LazyLoad
