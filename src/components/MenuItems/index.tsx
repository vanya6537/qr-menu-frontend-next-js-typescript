import { Data } from '@/pages/api/getMenu';

type Props = { menu: Data };

export default function MenuItems({ menu }: Props): JSX.Element {
  return (
    <>
      {menu.map(({ name: categoryName, id: categoryId, items: menuItems }) => (
        <div className="products_productsBlock" key={categoryId}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            className={`products_categoryAnchor ${categoryName}`}
            id={categoryId}
          />

          <h2 className="products_productsBlockTitle">{categoryName}</h2>
          <div className="products_productsBlockContent">
            {menuItems.map(({ name, description, price, src }) => (
              <div className="position_position" key={`${name}`}>
                <div className="position_descriptionSection_u position_descriptionSectionWithImage">
                  <div className="position_nameAndDescriptionWrapper">
                    <p className="position_name_bPs" title={name}>
                      {name}
                    </p>
                    <p className="position_description" title={description}>
                      {description}
                    </p>
                  </div>
                  <div className="position_priceBlock">
                    <p className="position_price">{price} ₽</p>
                    <div className="position_addWrapper">
                      <button type="button" className="position_quantityButton">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="position_photoContainer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} className="position_photo" alt={name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
