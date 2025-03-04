import ProductList from '../../Containers/ProductList'

import { promotions, comingSoon } from '../Home'

const Categories = () => (
  <>
    <ProductList games={promotions} title="RPG" background="gray" />
    <ProductList games={comingSoon} title="Ação" background="black" />
    <ProductList games={promotions} title="Aventura" background="gray" />
    <ProductList games={comingSoon} title="FPS" background="black" />
  </>
)

export default Categories
