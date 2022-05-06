import style from "./headerMemu.module.css"

const HeaderMenu = (data) => {
  const currency=["USD","EUR","GEL"]
  const names=currency.map(id=>{
   return <li className={style.currencyItem} key={id}>{id}:{data.data[id]}</li>
  })

  return <ul className={style.cureencyList}>{names}</ul>;
};

export default HeaderMenu;
