import { resources } from "../../resources";
import { Header } from "../../components/Header/Header";
import s from "./CatalogPage.module.css";
import { CheckBoxGroup } from "../../components/CheckBoxGroup/CheckBoxGroup";

const searchInputId = "searchInput";
const categorySelectId = "categorySelect";

export function CatalogPage() {
  const { banner, categories, products, customOptions } = resources.CatalogPage;
  return (
    <div className={s.body}>
      <Header />
      <div className={s.root}>
        {/* Баннер */}
        <div
          className={s.banner}
          style={{
            backgroundImage: `url("${banner}")`,
          }}
        ></div>

        {/* Фильтр */}
        <div className={s.filter}>
          <h2>Фильтры</h2>
          <div className={s.search}>
            <h3 className={s.headFilter}>Поиск:</h3>
            <input className={s.searchInput} id={searchInputId} />
          </div>
          <div className={s.categories}>
            <h3 className={s.headFilter}>Категории:</h3>
            <select className={s.select} id={categorySelectId}>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
          <CheckBoxGroup className={s.cost} options={customOptions} />
          <button className={s.buttonFilter}>Отфильтровать</button>
        </div>

        {/* Контейнер */}
        <div className={s.productContainer}>
          <h3 className={s.productsListTitle}>Каталог</h3>
          <ul className={s.products}>
            {products.map((product) => (
              <li></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
