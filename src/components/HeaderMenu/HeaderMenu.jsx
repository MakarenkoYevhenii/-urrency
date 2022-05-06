const HeaderMenu = (data) => {
  const currency=["USD","EUR","GEL"]
  const names=currency.map(id=>{
   return <p key={id}>{id}:{data.data[id]}</p>
  })

  return <>{names}</>;
};

export default HeaderMenu;
