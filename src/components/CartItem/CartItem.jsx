const CartItem = (props) => {
  return (
    <>
      <div className="menu__cards__card">
        <img src={props.src} alt={props.altimg} />
        <div class="menu__cards__info">
          <h3
            onClick={() => {
              props.onAddToCart(props);
            }}>
            {props.title}
          </h3>
          <p>{props.descr}</p>
          <p class="menu__cards__time">{props.time} мин.</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;